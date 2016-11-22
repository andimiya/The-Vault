'use strict';
module.exports = function () {

  var secretValue = 0;

  var setValue = function (key, value) {
    key = secretValue;
    return getValue();
  };


  var getValue = function (key) {
    if (!key) {
        return null;
    }
    else if (key === setValue) {
      return setValue;
    }
    else {
      return setValue();
    }
  };


  return {
    setValue: setValue,
    getValue: getValue,
  };

};