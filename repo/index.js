
let pages = {};

exports.storePage = function(page) {
    pages[page.id] = page;
}

exports.getPage = function(id) {
    return pages[id];
}

