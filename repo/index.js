
let pages = {};

exports.storePage = function(page) {
    pages[page.id] = page;
    console.log("Pages: ", pages);
}

exports.getPage = function(id) {
    return pages[id];
}

exports.deletePage = function(id) {
    delete pages[id];
    console.log("Pages: ", pages);
}
