const validateImageUrl = (url) => {
    const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
};

module.exports = validateImageUrl;
