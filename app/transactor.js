const {spec, valid} = require("js.spec");

const EventSpec = spec.map({
  type: spec.string,
  data: spec.object,
});

const validateEvent = function (evt) {
  return valid(EventSpec, evt);
};

const novelty = function (evt) {
  console.log(evt);
};

module.exports = {
  validateEvent: validateEvent,
  novelty: novelty
};
