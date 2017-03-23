const Events = require("./events");

let txLog = [];

exports.novelty = function (evt) {

  txLog.push(evt);
  console.log(evt);

  if (evt.type === Events.CREATE_PAGE) {
    return Events.handleCreatePage(evt.payload);
  } else {
    throw "Invalid event type";
  }
};

