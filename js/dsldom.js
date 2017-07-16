var curry = R.curry;
var compose = R.compose;

var createTag = (tagName) => document.createElement(tagName);
var setAttributes = (tagName, attrs) => {
  for(var key in attrs) {
    tagName.setAttribute(key, attrs[key]);
  }
  return tagName;
};

var currySetAttributes = curry(setAttributes);
var createElement = compose(currySetAttributes, createTag);
var curryCreateElement = curry(createElement);

var createDSLDOM = (...args) => args.map(function(el) {
  return curryCreateElement(el);
});
