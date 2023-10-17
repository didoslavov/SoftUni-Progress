function getSelectedOption(payment) {
    const paymentMethods = {
        'crypto-wallet': '<option value="crypto-wallet">Crypto Wallet</option>',
        'credit-card': '<option value="credit-card">Credit Card</option>',
        'debit-card': '<option value="debit-card">Debit Card</option>',
        paypal: '<option value="paypal">PayPal</option>',
    };

    paymentMethods[payment] = paymentMethods[payment].replace(`value="${payment}"`, `value=${payment} selected`);

    return Object.values(paymentMethods);
}

module.exports = {
    getSelectedOption,
};
