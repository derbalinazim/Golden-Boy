// Shared Promo Codes
const VALID_PROMOS = {
    'AYUUB': 0.1,
    'RAHIM': 0.1,
    'NAZIM': 0.1,
    '9AZOLA': 0.1,
    'MAHDIBZ': 0.1,
    'MOMOH': 0.1
};

// Translations
const translations = {
    en: {
        "nav-home": "HOME", "nav-man": "MAN", "nav-woman": "WOMAN", "nav-shop": "CART",
        "promo-text": "PROMO CODE — GET 10% OFF", "promo-placeholder": "Enter promo code", "btn-apply": "APPLY",
        "hero-man": "MAN COLLECTION", "hero-woman": "WOMAN COLLECTION",
        "title-featured": "FEATURED", "title-reviews": "WHAT THEY SAY",
        "btn-view-all": "VIEW ALL", "btn-add": "ADD TO CART",
        "lbl-size": "SIZE", "msg-added": "✓ Added to cart",
        "msg-promo-success": "✓ 10% discount applied", "msg-promo-fail": "Invalid promo code.",
        "lbl-total-cost": "TOTAL", "btn-command-now": "COMMAND NOW", "lbl-items": "items",
        "lbl-delivery-option": "DELIVERY OPTION *", "lbl-maison": "HOME",
        "lbl-bureau": "OFFICE", "lbl-delivery": "DELIVERY",
        "btn-more-details": "MORE DETAILS",
        "lbl-size-guide": "📐 Size Guide (Height & Weight)",
        "th-size": "Size", "th-weight": "Weight (kg)", "th-height": "Height (cm)",
        "lbl-bundle-header": "BUNDLE & SAVE",
        "lbl-take-1": "BUY 1", "lbl-take-2": "BUY 2", "lbl-take-3": "BUY 3",
        "sub-take-1": "Standard price", "sub-take-2": "Save 350 DA on your pack", "sub-take-3": "Save 700 DA on your pack",
        "lbl-popular": "MOST POPULAR", "lbl-recommended": "BEST VALUE",
        "lbl-save-350": "SAVE 350 DA", "lbl-save-700": "SAVE 700 DA",
        "lbl-color": "COLOR",
        "color-black": "Black", "color-white": "White", "color-grey": "Grey", "color-burgundy": "Burgundy",
        "prod-comp-shirt": "Golden Boy Compression Shirt",
        "desc-comp-shirt": "Premium compression fabric designed for intense workouts. Breathable, sweat-wicking, and perfectly fitted to highlight your physique.",
        "prod-long-sleeve": "Golden Boy Compression Long Sleeve",
        "desc-long-sleeve": "Engineered for cold environments and maximum muscle support. Keeps you warm while wicking sweat away from the body.",
        "prod-tank": "Golden Boy Tank Top",
        "desc-tank": "Unrestricted movement for heavy lifting days. A classic gym aesthetic built with a high-quality, stretchable cotton blend.",
        "prod-jogger": "Golden Boy Jogger",
        "desc-jogger": "The ultimate gym bottom. Tapered fit, deep pockets, and durable fabric designed to stretch on leg days without losing its shape.",
        "title-checkout": "CHECKOUT",
        "title-customer-details": "CUSTOMER DETAILS",
        "lbl-fullname": "FULL NAME *",
        "lbl-phone": "PHONE NUMBER *",
        "lbl-wilaya": "WILAYA *",
        "lbl-address": "COMMUNE / ADDRESS *",
        "lbl-notes": "NOTES (Optional)",
        "btn-confirm-order": "CONFIRM ORDER",
        "btn-processing": "PROCESSING...",
        "title-summary": "SUMMARY",
        "lbl-subtotal": "SUBTOTAL",
        "lbl-discount": "DISCOUNT",
        "title-order-confirmed": "ORDER CONFIRMED",
        "msg-order-confirmed": "Thank you for shopping with Golden Boy. We have received your order details.",
        "btn-whatsapp": "ORDER VIA WHATSAPP",
        "btn-continue": "CONTINUE SHOPPING",
        "msg-cart-empty": "Your cart is empty.",
        "btn-remove": "Remove"
    },
    fr: {
        "nav-home": "ACCUEIL", "nav-man": "HOMME", "nav-woman": "FEMME", "nav-shop": "PANIER",
        "promo-text": "CODE PROMO — OBTENEZ 10% DE RÉDUCTION", "promo-placeholder": "Entrez le code promo", "btn-apply": "APPLIQUER",
        "hero-man": "COLLECTION HOMME", "hero-woman": "COLLECTION FEMME",
        "title-featured": "EN VEDETTE", "title-reviews": "CE QU'ILS DISENT",
        "btn-view-all": "VOIR TOUT", "btn-add": "AJOUTER AU PANIER",
        "lbl-size": "TAILLE", "msg-added": "✓ Ajouté au panier",
        "msg-promo-success": "✓ 10% de réduction appliquée", "msg-promo-fail": "Code promo invalide.",
        "lbl-total-cost": "TOTAL", "btn-command-now": "COMMANDER MAINTENANT", "lbl-items": "articles",
        "lbl-delivery-option": "OPTION DE LIVRAISON *", "lbl-maison": "MAISON",
        "lbl-bureau": "BUREAU", "lbl-delivery": "LIVRAISON",
        "btn-more-details": "PLUS DE DÉTAILS",
        "lbl-size-guide": "📐 Guide des Tailles (Taille & Poids)",
        "th-size": "Taille", "th-weight": "Poids (kg)", "th-height": "Hauteur (cm)",
        "lbl-bundle-header": "OFFRES PACKS",
        "lbl-take-1": "ACHETER 1", "lbl-take-2": "PACK DE 2", "lbl-take-3": "PACK DE 3",
        "sub-take-1": "Prix standard", "sub-take-2": "Économisez 350 DA", "sub-take-3": "Économisez 700 DA",
        "lbl-popular": "PLUS POPULAIRE", "lbl-recommended": "MEILLEURE OFFRE",
        "lbl-save-350": "-350 DA", "lbl-save-700": "-700 DA",
        "lbl-color": "COULEUR",
        "color-black": "Noir", "color-white": "Blanc", "color-grey": "Gris", "color-burgundy": "Bordeaux",
        "prod-comp-shirt": "T-shirt de Compression Golden Boy",
        "desc-comp-shirt": "Tissu de compression premium conçu pour les entraînements intenses. Respirant et ajusté.",
        "prod-long-sleeve": "Manches Longues de Compression",
        "desc-long-sleeve": "Conçu pour un maintien musculaire maximal tout en évacuant la transpiration.",
        "prod-tank": "Débardeur Golden Boy",
        "desc-tank": "Mouvement sans restriction pour les séances lourdes. Coupe athlétique.",
        "prod-jogger": "Pantalon Jogger Golden Boy",
        "desc-jogger": "Le bas de sport ultime. Coupe fuselée, poches profondes et tissu extensible durable.",
        "title-checkout": "VALIDATION DE COMMANDE",
        "title-customer-details": "DÉTAILS DU CLIENT",
        "lbl-fullname": "NOM COMPLET *",
        "lbl-phone": "NUMÉRO DE TÉLÉPHONE *",
        "lbl-wilaya": "WILAYA *",
        "lbl-address": "COMMUNE / ADRESSE *",
        "lbl-notes": "NOTES (Optionnel)",
        "btn-confirm-order": "CONFIRMER LA COMMANDE",
        "btn-processing": "TRAITEMENT...",
        "title-summary": "RÉSUMÉ",
        "lbl-subtotal": "SOUS-TOTAL",
        "lbl-discount": "RÉDUCTION",
        "title-order-confirmed": "COMMANDE CONFIRMÉE",
        "msg-order-confirmed": "Merci d'avoir acheté chez Golden Boy. Nous avons bien reçu votre commande.",
        "btn-whatsapp": "COMMANDER VIA WHATSAPP",
        "btn-continue": "CONTINUER VOS ACHATS",
        "msg-cart-empty": "Votre panier est vide.",
        "btn-remove": "Supprimer"
    },
    ar: {
        "nav-home": "الرئيسية", "nav-man": "رجال", "nav-woman": "نساء", "nav-shop": "السلة",
        "promo-text": "كود الخصم — احصل على خصم 10٪", "promo-placeholder": "أدخل كود الخصم", "btn-apply": "تطبيق",
        "hero-man": "مجموعة الرجال", "hero-woman": "مجموعة النساء",
        "title-featured": "المميز", "title-reviews": "ماذا يقولون",
        "btn-view-all": "عرض الكل", "btn-add": "أضف للسلة",
        "lbl-size": "المقاس", "msg-added": "✓ تمت الإضافة للسلة",
        "msg-promo-success": "✓ تم تطبيق خصم 10٪", "msg-promo-fail": "كود الخصم غير صالح.",
        "lbl-total-cost": "المجموع", "btn-command-now": "اطلب الآن", "lbl-items": "قطع",
        "lbl-delivery-option": "خيار التوصيل *", "lbl-maison": "المنزل",
        "lbl-bureau": "المكتب", "lbl-delivery": "التوصيل",
        "btn-more-details": "تفاصيل أكثر",
        "lbl-size-guide": "📐 دليل المقاسات (الطول والوزن)",
        "th-size": "المقاس", "th-weight": "الوزن (كغ)", "th-height": "الطول (سم)",
        "lbl-bundle-header": "عروض التوفير",
        "lbl-take-1": "قطعة واحدة", "lbl-take-2": "عرض قطعتين", "lbl-take-3": "عرض 3 قطع",
        "sub-take-1": "السعر العادي", "sub-take-2": "وفر 350 دج على العرض", "sub-take-3": "وفر 700 دج على العرض",
        "lbl-popular": "الأكثر مبيعاً", "lbl-recommended": "أفضل قيمة",
        "lbl-save-350": "وفر 350 دج", "lbl-save-700": "وفر 700 دج",
        "lbl-color": "اللون",
        "color-black": "أسود", "color-white": "أبيض", "color-grey": "رمادي", "color-burgundy": "عنابي",
        "prod-comp-shirt": "قميص ضغط Golden Boy",
        "desc-comp-shirt": "قماش ضغط ممتاز مصمم للتمارين الشاقة. مسامي ومصمم لإبراز تفاصيل الجسم.",
        "prod-long-sleeve": "قميص ضغط بأكمام طويلة",
        "desc-long-sleeve": "مصمم للأجواء الباردة ولأقصى دعم للعضلات مع طرد العرق.",
        "prod-tank": "قميص بدون أكمام Golden Boy",
        "desc-tank": "حرية حركة كاملة لأيام التمرين الشاقة بخامة قطنية مرنة عالية الجودة.",
        "prod-jogger": "سروال رياضي Golden Boy",
        "desc-jogger": "السروال الرياضي المثالي. قصة ضيقة أنيقة وجيوب عميقة وقماش متين ومرن.",
        "title-checkout": "إتمام الطلب",
        "title-customer-details": "معلومات الزبون",
        "lbl-fullname": "الاسم الكامل *",
        "lbl-phone": "رقم الهاتف *",
        "lbl-wilaya": "الولاية *",
        "lbl-address": "البلدية / العنوان *",
        "lbl-notes": "ملاحظات (اختياري)",
        "btn-confirm-order": "تأكيد الطلب",
        "btn-processing": "جاري المعالجة...",
        "title-summary": "ملخص الطلب",
        "lbl-subtotal": "المجموع الفرعي",
        "lbl-discount": "الخصم",
        "title-order-confirmed": "تم تأكيد الطلب",
        "msg-order-confirmed": "شكراً لتسوقك مع Golden Boy. لقد استلمنا تفاصيل طلبك.",
        "btn-whatsapp": "تأكيد عبر واتساب",
        "btn-continue": "مواصلة التسوق",
        "msg-cart-empty": "سلة التسوق فارغة.",
        "btn-remove": "حذف"
    }
};

// Ensure Arabic is set as the default language immediately
if (!localStorage.getItem('goldenBoyDefaultAr')) {
    localStorage.setItem('lang', 'ar');
    localStorage.setItem('goldenBoyDefaultAr', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'ar');
    }
    initLang();
    initMenu();
    initPromo();
    updateCartCounter();
    updateBottomBar();

    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer && typeof products !== 'undefined') {
        renderProducts(products.filter(p => p.featured), featuredContainer);
    }

    const manContainer = document.getElementById('man-products');
    if (manContainer && typeof products !== 'undefined') {
        renderProducts(products.filter(p => p.category === 'man'), manContainer);
    }
});

function initLang() {
    let lang = localStorage.getItem('lang') || 'ar';
    applyLanguage(lang);
    updateActiveLangBtn(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let selectedLang = e.currentTarget.dataset.lang;
            localStorage.setItem('lang', selectedLang);
            applyLanguage(selectedLang);
            updateActiveLangBtn(selectedLang);
        });
    });
}

function updateActiveLangBtn(selectedLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === selectedLang);
    });
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // Translate promo input placeholder even if data-i18n attribute is missing in HTML
    const promoInput = document.getElementById('promo-input');
    if (promoInput && translations[lang]?.['promo-placeholder']) {
        promoInput.placeholder = translations[lang]['promo-placeholder'];
    }

    // Translate Size Guide table headers
    const sgHeaders = document.querySelectorAll('#size-guide-modal thead th');
    if (sgHeaders.length === 3 && translations[lang]) {
        sgHeaders[0].innerText = translations[lang]['th-size'];
        sgHeaders[1].innerText = translations[lang]['th-weight'];
        sgHeaders[2].innerText = translations[lang]['th-height'];
    }

    // Re-render cart page items if currently on cart.html
    if (typeof window.renderCartPage === 'function' && document.getElementById('cart-items-container')) {
        window.renderCartPage();
    }

    updateBottomBar();
}

function initMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    if (menuBtn && sideMenu && overlay) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if (closeBtn && sideMenu && overlay) {
        const closeMenu = () => {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        };
        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
    }
}

function initPromo() {
    const applyBtn = document.getElementById('apply-promo');
    const promoInput = document.getElementById('promo-input');
    const promoMsg = document.getElementById('promo-msg');

    const savedCode = localStorage.getItem('promoCode');
    if (savedCode && VALID_PROMOS[savedCode]) {
        if (promoInput) promoInput.value = savedCode;
        if (promoMsg) {
            let lang = localStorage.getItem('lang') || 'ar';
            promoMsg.innerText = translations[lang]["msg-promo-success"];
        }
    }

    if (applyBtn && promoInput) {
        applyBtn.addEventListener('click', () => {
            let code = promoInput.value.trim().toUpperCase();
            let lang = localStorage.getItem('lang') || 'ar';
            if (VALID_PROMOS[code]) {
                localStorage.setItem('promoCode', code);
                if (promoMsg) {
                    promoMsg.innerText = translations[lang]["msg-promo-success"];
                    promoMsg.style.color = "inherit";
                }
            } else {
                localStorage.removeItem('promoCode');
                if (promoMsg) {
                    promoMsg.innerText = translations[lang]["msg-promo-fail"];
                    promoMsg.style.color = "red";
                }
            }
            if (window.updateCartTotals) window.updateCartTotals();
            updateBottomBar();
        });
    }
}

function renderProducts(items, container) {
    container.innerHTML = '';
    let lang = localStorage.getItem('lang') || 'ar';

    items.forEach(product => {
        let priceHTML = product.sale
            ? `<span class="old-price">${product.oldPrice} DA</span> <span>${product.price} DA</span>`
            : `<span>${product.price} DA</span>`;

        let badges = '';
        if (product.sale) badges += `<span class="badge">SALE</span>`;
        if (product.new) badges += `<span class="badge">NEW</span>`;

        let linkPage = product.page || 'index.html';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="${linkPage}" class="product-img-wrapper" style="display:block;">
                <div class="badges">${badges}</div>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="price-box">${priceHTML}</div>
                <a href="${linkPage}" class="btn" style="margin-top: 15px; padding: 0.8rem; text-align:center;">
                    <span data-i18n="btn-more-details">${translations[lang]["btn-more-details"] || "MORE DETAILS"}</span>
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

function getCart() {
    return JSON.parse(localStorage.getItem('goldenCart')) || [];
}

function calculateCartFinancials(cart) {
    let rawSubtotal = 0;
    const groupCounts = {};

    cart.forEach(item => {
        const unitBase = item.basePrice || item.price;
        rawSubtotal += unitBase * item.quantity;
        const groupKey = item.productId || item.id.split('-')[0];
        groupCounts[groupKey] = (groupCounts[groupKey] || 0) + item.quantity;
    });

    let bundleDiscount = 0;
    Object.values(groupCounts).forEach(qty => {
        const packsOf3 = Math.floor(qty / 3);
        const remainder = qty % 3;
        const packsOf2 = Math.floor(remainder / 2);
        bundleDiscount += (packsOf3 * 700) + (packsOf2 * 350);
    });

    const netAfterBundles = Math.max(0, rawSubtotal - bundleDiscount);
    const code = localStorage.getItem('promoCode');
    const promoDiscount = (code && VALID_PROMOS[code]) ? Math.round(netAfterBundles * VALID_PROMOS[code]) : 0;
    const totalDiscount = bundleDiscount + promoDiscount;
    const finalMerchandiseTotal = Math.max(0, rawSubtotal - totalDiscount);

    return {
        rawSubtotal,
        bundleDiscount,
        promoDiscount,
        totalDiscount,
        finalMerchandiseTotal,
        promoCode: (code && VALID_PROMOS[code]) ? code : "NONE"
    };
}

function addToCart(item) {
    let cart = getCart();
    let existing = cart.find(i => i.id === item.id && i.size === item.size);
    if (existing) {
        existing.quantity += item.quantity || 1;
        existing.basePrice = item.basePrice || item.price;
        existing.price = item.basePrice || item.price;
    } else {
        cart.push({
            ...item,
            basePrice: item.basePrice || item.price,
            price: item.basePrice || item.price
        });
    }
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    updateCartCounter();
    updateBottomBar();
    showNotification();

    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', {
            content_name: item.name,
            value: item.price,
            currency: 'DZD'
        });
    }
}

function updateCartCounter() {
    let cart = getCart();
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.innerText = totalItems);
}

function updateBottomBar() {
    const bottomBar = document.getElementById('sticky-bottom-bar');
    if (!bottomBar) return;

    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems > 0) {
        const { finalMerchandiseTotal } = calculateCartFinancials(cart);
        const costEl = document.getElementById('bottom-bar-price');
        if (costEl) costEl.innerText = `${finalMerchandiseTotal.toLocaleString()} DA`;

        bottomBar.classList.add('active');
        document.body.classList.add('has-bottom-bar');
    } else {
        bottomBar.classList.remove('active');
        document.body.classList.remove('has-bottom-bar');
    }
}

function showNotification() {
    let lang = localStorage.getItem('lang') || 'ar';
    const notif = document.getElementById('notification');
    if (!notif) return;
    notif.innerText = translations[lang]["msg-added"];
    notif.classList.add('show');
    setTimeout(() => { notif.classList.remove('show'); }, 3000);
}

window.translations = translations;
window.VALID_PROMOS = VALID_PROMOS;
window.calculateCartFinancials = calculateCartFinancials;
window.updateBottomBar = updateBottomBar;
window.updateCartCounter = updateCartCounter;
window.applyLanguage = applyLanguage;
window.addToCart = addToCart;
window.getCart = getCart;