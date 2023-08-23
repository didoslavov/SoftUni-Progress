const maxLength = [500, 'Description must be max 500 chars.'];

const validateImageUrl = (url) => {
    const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
};

module.exports = { maxLength, validateImageUrl };
