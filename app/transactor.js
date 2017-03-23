const {spec, valid} = require("js.spec");

const EventSpec = spec.map({
  type: spec.string,
  data: spec.object,
});


let txLog = [];


const validateEvent = function (evt) {
  return valid(EventSpec, evt);
};

const novelty = function (evt) {
  txLog.push(evt);
  console.log(evt);
};

module.exports = {
  validateEvent: validateEvent,
  novelty: novelty
};
