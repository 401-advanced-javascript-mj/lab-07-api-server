'use strict';

class Entry {
  constructor(name) {
    this.id = null;
    this.name = name;
  }

  static validate(obj, schema) {
    console.log(obj, schema, Object.keys(obj));
    console.log(schema[0] === Object.keys(obj)[0]);
    // if (schema[0] === Object.keys(obj)[0]) {
    const props = Object.keys(obj);

    if (props.every((entry, i) => schema[i] === entry)) {
      let name = obj.name;
      return new Entry(name);
    }
    console.error('the body is not valid');
  }
}

module.exports = Entry;
