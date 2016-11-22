'use strict';
module.exports = function () {

// Create variables to store the value and key across both setValue and getValue functions
  var secretValue = 0;
  var secretKey = 0;

  var setValue = function (key, value) {
    secretValue = value;  // Set the secretValue variable to hold the value
    secretKey = key;  // Set the secretKey variable to hold the key
    return getValue();  // Trigger the getValue function since the variables have been set
  };


  var getValue = function (key) {
    if (key === null) {   // If there is no key, return null
      return null;
    }
    else if (key === secretKey) {  // Use the key set in the setValue function to return the secretValue
      return secretValue;
    }
    else {
      return null;  // If the key doesn't match the key that was set in the setValue function, return null
    }
  };

  return {
    setValue: setValue,
    getValue: getValue,
  };

};