document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items-container')) {
        renderCartPage();

        const deliveryRadios = document.getElementsByName('delivery');
        deliveryRadios.forEach(radio => {
            radio.addEventListener('change', updateCartTotals);
        });

        if (typeof fbq !== 'undefined' && getCart().length > 0) {
            fbq('track', 'InitiateCheckout');
        }
    }
});

function renderCartPage() {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<p style="padding: 1.5rem 0; font-weight: 600;">Your cart is empty.</p>`;
        updateCartTotals();
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h4>${item.name}</h4>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
                <p>Size: <strong>${item.size}</strong></p>
                <p>${item.basePrice || item.price} DA</p>
                <div class="qty-wrapper" style="width: fit-content; margin-top:10px;">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                    <input type="text" id="qty-${index}" class="qty-input" value="${item.quantity}" readonly>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });

    updateCartTotals();
}

function changeQty(index, delta) {
    let cart = getCart();
    if (cart[index].quantity + delta > 0) {
        cart[index].quantity += delta;
        localStorage.setItem('goldenCart', JSON.stringify(cart));

        const qtyInput = document.getElementById(`qty-${index}`);
        if (qtyInput) {
            qtyInput.value = cart[index].quantity;
        }

        updateCartTotals();
        if (window.updateCartCounter) window.updateCartCounter();
        if (window.updateBottomBar) window.updateBottomBar();
    }
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    renderCartPage();
    if (window.updateCartCounter) window.updateCartCounter();
    if (window.updateBottomBar) window.updateBottomBar();
}

function updateCartTotals() {
    const cart = getCart();
    const { rawSubtotal, totalDiscount, finalMerchandiseTotal } = window.calculateCartFinancials(cart);

    let deliveryFee = 0;
    const deliveryOptions = document.getElementsByName('delivery');
    if (deliveryOptions.length > 0 && cart.length > 0) {
        for (let option of deliveryOptions) {
            if (option.checked) {
                deliveryFee = parseInt(option.value, 10);
                break;
            }
        }
    }

    if (!document.getElementById('summary-delivery')) {
        deliveryFee = 0;
    }

    let total = cart.length > 0 ? (finalMerchandiseTotal + deliveryFee) : 0;

    const subEl = document.getElementById('summary-subtotal');
    const delEl = document.getElementById('summary-delivery');
    const discEl = document.getElementById('summary-discount');
    const totalEl = document.getElementById('summary-total');

    if (subEl) subEl.innerText = `${rawSubtotal} DA`;
    if (delEl) delEl.innerText = `${deliveryFee} DA`;
    if (discEl) discEl.innerText = `-${totalDiscount} DA`;
    if (totalEl) totalEl.innerText = `${total} DA`;
}

window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.updateCartTotals = updateCartTotals;