'use strict';
module.exports = function () {

  function setValue(key, value) {

    return value;
  }

  function getValue(key) {

    return key;
  }


};


// var myVault = vault();

// console.log( myVault.getValue() ); // null
// console.log( myVault.setValue('secret password', 'hunter2') );
// console.log( myVault.getValue('secret password') ); // hunter2
// console.log( myVault.getValue('bank account') ); // null

// var yourVault = vault();
// console.log( myVault.getValue('secret password') ); // null