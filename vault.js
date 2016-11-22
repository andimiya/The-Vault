'use strict';
module.exports = function () {

  var setValue = function (key, value) {
    value = 'hunter2';
    return value;
  };

  var getValue = function (key) {
    if (key === null) {
        return null;
    }

    else if (key === 'secret password') {
      return setValue();
    }

    else {
      return null;
    }

  };

  return {
    setValue: setValue,
    getValue: getValue,
  };

};