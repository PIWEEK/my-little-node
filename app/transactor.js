const Events = require("./events");

let txLog = [];

exports.novelty = async function (evt) {

  txLog.push(evt);
  console.log(evt);

  if (evt.type === Events.CREATE_PAGE) {
    return await Events.handleCreatePage(evt.payload);
  } else if (evt.type === Events.DELETE_PAGE) {
    return await Events.handleDeletePage(evt.payload);
  } else if (evt.type === Events.CREATE_WIDGET) {
    return await Events.handleCreateWidget(evt.payload);
  } else {
    throw "Invalid event type";
  }
};

