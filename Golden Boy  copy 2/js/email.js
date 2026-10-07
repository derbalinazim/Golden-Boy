document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("a-NBhLL25Z77Iz_8v");
    }

    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', handleCheckoutSubmit);
    }
});

function handleCheckoutSubmit(e) {
    e.preventDefault();
    const cart = getCart();
    const lang = localStorage.getItem('lang') || 'ar';

    if (cart.length === 0) {
        alert(window.translations?.[lang]?.["msg-cart-empty"] || "Your cart is empty.");
        return;
    }

    const submitBtn = document.getElementById('submit-order-btn');
    submitBtn.innerText = window.translations?.[lang]?.["btn-processing"] || "PROCESSING...";
    submitBtn.disabled = true;

    let deliveryFee = 750;
    let deliveryType = "Maison (750 DA)";
    const deliveryOptions = document.getElementsByName('delivery');
    for (let option of deliveryOptions) {
        if (option.checked) {
            deliveryFee = parseInt(option.value, 10);
            deliveryType = option.value === "750" ? "Maison (750 DA)" : "Bureau (500 DA)";
            break;
        }
    }

    const formData = {
        name: document.getElementById('c-name').value,
        phone: document.getElementById('c-phone').value,
        wilaya: document.getElementById('c-wilaya').value,
        address: document.getElementById('c-address').value,
        notes: document.getElementById('c-notes').value || "None",
        delivery: deliveryType
    };

    const { rawSubtotal, bundleDiscount, promoDiscount, totalDiscount, finalMerchandiseTotal, promoCode } = window.calculateCartFinancials(cart);
    const total = finalMerchandiseTotal + deliveryFee;

    let orderDetailsText = cart.map(item =>
        `- ${item.name} | Size: ${item.size} | Qty: ${item.quantity} | ${item.basePrice || item.price} DA`
    ).join('\n');

    const discountBreakdown = bundleDiscount > 0 && promoDiscount > 0
        ? `${totalDiscount} DA (Bundle: -${bundleDiscount} DA, Promo ${promoCode}: -${promoDiscount} DA)`
        : `${totalDiscount} DA (${promoCode})`;

    const templateParams = {
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_wilaya: formData.wilaya,
        customer_address: formData.address,
        customer_notes: formData.notes,
        delivery_option: formData.delivery,
        order_details: orderDetailsText,
        subtotal: rawSubtotal,
        delivery_fee: deliveryFee,
        discount: totalDiscount,
        total: total,
        promo_code: discountBreakdown
    };

    // Show confirmation screen immediately for instant checkout speed
    handleSuccess(templateParams);

    // Send EmailJS notification asynchronously in the background
    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_axec8bb", "template_ocswtc4", templateParams)
            .catch((error) => {
                console.error("EmailJS Error:", error);
            });
    }
}

function handleSuccess(params) {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', {
            value: params.total,
            currency: 'DZD'
        });
    }

    let waMessage = `*GOLDEN BOY ORDER*\n\n` +
        `*Customer:* ${params.customer_name}\n` +
        `*Phone:* ${params.customer_phone}\n` +
        `*Address:* ${params.customer_address}, ${params.customer_wilaya}\n` +
        `*Delivery:* ${params.delivery_option}\n\n` +
        `*Products:*\n${params.order_details}\n\n` +
        `*Subtotal:* ${params.subtotal} DA\n` +
        `*Delivery:* ${params.delivery_fee} DA\n` +
        `*Discount:* -${params.promo_code}\n` +
        `*Total:* ${params.total} DA\n`;

    if (params.customer_notes !== "None") {
        waMessage += `\n*Notes:* ${params.customer_notes}`;
    }

    document.querySelector('.cart-layout').style.display = 'none';
    const successBlock = document.getElementById('success-block');
    successBlock.style.display = 'block';

    const waBtn = document.getElementById('wa-btn');
    waBtn.onclick = () => {
        window.open(`https://wa.me/213792593933?text=${encodeURIComponent(waMessage)}`, '_blank');
    };

    localStorage.removeItem('goldenCart');
    if (window.updateCartCounter) window.updateCartCounter();
    if (window.updateBottomBar) window.updateBottomBar();
}