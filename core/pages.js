const {nextId} = require("../repo/idgen");

class Page {
  constructor(id, path, title) {
    this.id = id;
    this.path = path;
    this.title = title;
    this.slots = [];
  }

  attachWidget(slot, widget) {
    this.slots[slot] = widget;
  }
}

exports.create = function(path, title) {
  id = nextId();
  return new Page(id, path, title);
}

