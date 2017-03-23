const {nextId} = require("../repo/idgen");

class Widget {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

exports.create = function(title, content) {
  id = nextId();
  return new Widget(id, title, content);
}

