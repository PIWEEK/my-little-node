const {spec, valid} = require("js.spec");
const pages = require("../core/pages");
const widgets = require("../core/widgets");
const repo = require("../repo/sql_repo");


class Event {
  constructor(type, payload=null) {
    this.type = type;
    this.payload = payload;
  }
}

const EventSpec = spec.map({
  type: spec.string,
  payload: spec.object,
});


exports.isEvent = function(evt) {
  return evt instanceof Event;
};

exports.validate = function (evtData) {
  return valid(EventSpec, evtData);
};

exports.create = function({type, payload=null}) {
  return new Event(type, payload);
}

exports.CREATE_PAGE = "events:create-page";
exports.DELETE_PAGE = "events:delete-page";
exports.CREATE_WIDGET = "events:create-widget";
exports.DELETE_WIDGET = "events:delete-widget";


exports.handleCreatePage = async function({path, title}) {
  let page = pages.create(path, title);
  page = await repo.createPage(page);
  return page;
}

exports.handleDeletePage = async function({id}) {
  await repo.deletePage(id);
}

exports.handleCreateWidget = async function({pageId, slot, title, content}) {
  let page = await repo.getPage(pageId, pages.restore);
  let widget = widgets.create(title, content);
  page.attachWidget(slot, widget);
  await repo.updatePage(page);
  return widget;
}

