'use strict';

const copyOwnPropertiesFrom = (target, source) => {
  Object.getOwnPropertyNames(source)
  .forEach((name) => {
    let desc = Object.getOwnPropertyDescriptor(source, name);
    Object.defineProperty(target, name, desc);
  });
  return target;
};

module.exports = copyOwnPropertiesFrom;
