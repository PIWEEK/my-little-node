let pages = {};
let idCounter = 0;


const nextId = function() {
  return ++idCounter;
};


exports.createPage = async function(page) {
  page.setId(nextId());
  pages[page.id] = page;
  console.log("Pages: ", pages);
  return page;
}


exports.getPage = function(id, page_restore) {
  return pages[id];
}


exports.updatePage = function(page) {
  pages[page.id] = page;
  console.log("Pages: ", pages);
}


exports.deletePage = function(id) {
  delete pages[id];
  console.log("Pages: ", pages);
}
