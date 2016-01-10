var PRODUCT = function(){
  'use strict';

  var name = 'product module';

  return {
    sayHello: function() {
      var element = document.createElement('p');
      element.innerText = 'Hello from ' + name;
      document.body.appendChild(element);
    }
  }
}();