function getSelectedOption(category) {
    const categories = {
        'Real Estate': '<option value="Real Estate">Real Estate</option>',
        Vehicles: '<option value="Vehicles">Vehicles</option>',
        Furniture: '<option value="Furniture">Furniture</option>',
        Electronics: '<option value="Electronics">Electronics</option>',
        Other: '<option value="Other">Other</option>',
    };

    categories[category] = categories[category].replace(`value="${category}"`, `value="${category}" selected`);

    return Object.values(categories);
}

module.exports = {
    getSelectedOption,
};
