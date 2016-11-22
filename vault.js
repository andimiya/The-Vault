'use strict';
module.exports = function () {

  var setValue = function (key, value) {

    // return value;
  };

  var getValue = function (key) {
    if (!key) {
      return null;
    }
  };

  return {
    setValue: setValue,
    getValue: getValue,
  };

};


// var myVault = vault();

// console.log( myVault.getValue() ); // null
// console.log( myVault.setValue('secret password', 'hunter2') );
// console.log( myVault.getValue('secret password') ); // hunter2
// console.log( myVault.getValue('bank account') ); // null

// var yourVault = vault();
// console.log( myVault.getValue('secret password') ); // null