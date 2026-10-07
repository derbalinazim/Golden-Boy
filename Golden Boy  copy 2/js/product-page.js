let currentBundleTier = 1;
let bundleJustAdded = false;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.product-detail-container');
    if (!container) return;

    initBundleSelectors();
    initProductButtons();
    selectBundle(1);
});

// Extract available colors and images directly from the page's thumbnail gallery
function getProductColors() {
    const thumbs = document.querySelectorAll('.thumbnail-row .thumb');
    const colors = [];
    thumbs.forEach(thumb => {
        const colorCode = (thumb.getAttribute('alt') || 'Black').trim();
        const imgSrc = thumb.getAttribute('src');
        colors.push({
            code: colorCode,
            i18nKey: `color-${colorCode.toLowerCase()}`,
            image: imgSrc
        });
    });
    return colors.length > 0 ? colors : [{ code: 'Black', i18nKey: 'color-black', image: '' }];
}

function getProductSizes() {
    return ['S', 'M', 'L', 'XL'];
}

// Build #1, #2, #3 Color & Size dropdown rows inside each bundle card
function initBundleSelectors() {
    const colors = getProductColors();
    const sizes = getProductSizes();
    const lang = localStorage.getItem('lang') || 'ar';

    [1, 2, 3].forEach(tier => {
        const selectorContainer = document.getElementById(`selectors-${tier}`);
        if (!selectorContainer) return;

        selectorContainer.innerHTML = '';

        for (let i = 1; i <= tier; i++) {
            const row = document.createElement('div');
            row.className = 'selector-row';

            const colorOptions = colors.map((c, idx) => {
                const translatedColor = window.translations?.[lang]?.[c.i18nKey] || c.code;
                const isSelected = idx === 0 ? 'selected' : '';
                return `<option value="${c.code}" data-image="${c.image}" data-i18n="${c.i18nKey}" ${isSelected}>${translatedColor}</option>`;
            }).join('');

            const sizeOptions = sizes.map(s => {
                const isSelected = s === 'M' ? 'selected' : '';
                return `<option value="${s}" ${isSelected}>${s}</option>`;
            }).join('');

            row.innerHTML = `
                <span class="item-index">#${i}</span>
                <select class="color-select" aria-label="Color">
                    ${colorOptions}
                </select>
                <select class="size-select" aria-label="Size">
                    ${sizeOptions}
                </select>
            `;

            // Prevent clicking inside dropdowns from re-triggering the parent <label> click
            row.querySelectorAll('select').forEach(selectEl => {
                selectEl.addEventListener('click', (e) => e.stopPropagation());
                selectEl.addEventListener('change', () => {
                    bundleJustAdded = false;
                });
            });

            // Update main image preview when user picks a color in the dropdown
            const colorSelect = row.querySelector('.color-select');
            colorSelect.addEventListener('change', (e) => {
                const selectedOpt = e.target.options[e.target.selectedIndex];
                const newImg = selectedOpt.getAttribute('data-image');
                if (newImg) {
                    const mainImg = document.getElementById('main-product-img');
                    if (mainImg) mainImg.src = newImg;
                    document.querySelectorAll('.thumbnail-row .thumb').forEach(thumb => {
                        thumb.classList.toggle('active', thumb.getAttribute('src') === newImg);
                    });
                }
            });

            selectorContainer.appendChild(row);
        }
    });
}

// Switch main gallery image when clicking a thumbnail
function updateMainImage(thumbEl) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg && thumbEl) {
        mainImg.src = thumbEl.src;
    }
    document.querySelectorAll('.thumbnail-row .thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
}

// Switch active bundle tier (1, 2, or 3)
function selectBundle(tier) {
    currentBundleTier = tier;
    bundleJustAdded = false;

    const cards = document.querySelectorAll('.bundle-card');
    cards.forEach((card, index) => {
        const cardTier = index + 1;
        const radio = card.querySelector('input[type="radio"]');
        if (cardTier === tier) {
            card.classList.add('active');
            if (radio) radio.checked = true;
        } else {
            card.classList.remove('active');
            if (radio) radio.checked = false;
        }
    });

    // Update top displayed price to reflect active bundle price
    const bundlePriceEl = document.getElementById(`bundle-price-${tier}`);
    const displayPriceEl = document.getElementById('display-price');
    if (bundlePriceEl && displayPriceEl) {
        displayPriceEl.innerText = bundlePriceEl.innerText;
    }
}

// Gather selected colors & sizes from the active bundle and add to cart
function addSelectedBundleToCart() {
    const container = document.querySelector('.product-detail-container');
    if (!container) return;

    const basePrice = parseInt(container.dataset.basePrice, 10) || 0;
    const productId = container.dataset.productId || 'item';
    const productName = container.dataset.productName || 'Golden Boy Product';

    const selectorContainer = document.getElementById(`selectors-${currentBundleTier}`);
    if (!selectorContainer) return;

    const rows = selectorContainer.querySelectorAll('.selector-row');
    rows.forEach(row => {
        const colorSelect = row.querySelector('.color-select');
        const sizeSelect = row.querySelector('.size-select');

        const colorCode = colorSelect ? colorSelect.value : 'Black';
        const selectedColorOpt = colorSelect ? colorSelect.options[colorSelect.selectedIndex] : null;
        const imageSrc = selectedColorOpt?.getAttribute('data-image') || document.getElementById('main-product-img')?.getAttribute('src') || '';
        const size = sizeSelect ? sizeSelect.value : 'M';

        const item = {
            id: `${productId}-${colorCode.toLowerCase()}`,
            productId: productId,
            name: `${productName} (${colorCode})`,
            color: colorCode,
            size: size,
            price: basePrice,
            basePrice: basePrice,
            image: imageSrc,
            quantity: 1
        };

        if (window.addToCart) {
            window.addToCart(item);
        }
    });

    bundleJustAdded = true;
}

// Set up "Add to Cart" button and "Command Now" button
function initProductButtons() {
    const infoPanel = document.querySelector('.product-info-panel');
    if (!infoPanel) return;

    const commandBtn = infoPanel.querySelector('.bottom-bar-btn');
    const lang = localStorage.getItem('lang') || 'ar';

    // Inject an "Add to Cart" button above "Command Now" if not already in the HTML
    if (!document.getElementById('add-bundle-to-cart') && commandBtn) {
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.id = 'add-bundle-to-cart';
        addBtn.className = 'btn';
        addBtn.style.marginBottom = '0.75rem';
        addBtn.setAttribute('data-i18n', 'btn-add');
        addBtn.innerText = window.translations?.[lang]?.['btn-add'] || 'أضف للسلة';

        addBtn.addEventListener('click', () => {
            addSelectedBundleToCart();
        });

        infoPanel.insertBefore(addBtn, commandBtn);
    }

    // When clicking "Command Now", add the selected bundle if not already added, then go to cart.html
    if (commandBtn) {
        commandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!bundleJustAdded) {
                addSelectedBundleToCart();
            }
            window.location.href = 'cart.html';
        });
    }
}

window.updateMainImage = updateMainImage;
window.selectBundle = selectBundle;