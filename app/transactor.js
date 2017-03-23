const Events = require("./events");

let txLog = [];

exports.novelty = function (evt) {

  txLog.push(evt);
  console.log(evt);

  if (evt.type === Events.CREATE_PAGE) {
    return Events.handleCreatePage(evt.payload);
  } else if (evt.type === Events.DELETE_PAGE) {
    return Events.handleDeletePage(evt.payload);
  } else if (evt.type === Events.CREATE_WIDGET) {
    return Events.handleCreateWidget(evt.payload);
  } else {
    throw "Invalid event type";
  }
};

