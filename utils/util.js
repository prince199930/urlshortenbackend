function validateUrl(value) {
    // Regex pattern for checking valid Url
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var urlPattern = new RegExp(expression);

    return value.match(urlPattern);
}

module.exports = { validateUrl };