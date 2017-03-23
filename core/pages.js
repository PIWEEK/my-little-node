class Page {
  constructor(id, path, title, slots) {
    this.id = id;
    this.path = path;
    this.title = title;
    this.slots = slots;
  }

  setId(id) {
    this.id = id;
  }

  attachWidget(slot, widget) {
    this.slots[slot] = widget;
  }
}

exports.create = function(path, title) {
  return new Page(null, path, title, []);
}


exports.restore = function({id, path, title, slots}) {
  return new Page(id, path, title, slots);
}

