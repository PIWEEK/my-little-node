class Widget {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

exports.create = function(title, content) {
  return new Widget(title, content);
}

