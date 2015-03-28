// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(Array.isArray(obj)) {  // handle arrays

    var elements = [];
    for(var i=0, len = obj.length; i<len; i++) {
      elements.push(stringifyJSON(obj[i]));  //  recursive call to handle each element
    }

    return '[' + elements + ']';

  } else if (typeof obj === 'object' && obj !== null) {  // handle object literals

    var pair = [];
    for(var i in obj) {
      if(stringifyJSON(obj[i]) !== '') {
        pair.push(stringifyJSON(i) + ':' + stringifyJSON(obj[i]));
      }
    }

    return '{' + pair + '}';

  } else if (typeof obj === 'function') { // handle functions

    return stringifyJSON(obj());

  } else if (typeof obj === 'string') {  //handle strings

    return '"' + obj + '"';

  } else if (obj === undefined) {  // handle undefined

    return '';

  } else {

    return '' + obj;

  }

};
