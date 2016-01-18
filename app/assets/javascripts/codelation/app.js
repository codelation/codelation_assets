(function() {
  "use strict";

  var app = window.App;

  if (app === undefined) {
    app = window.App = {};
  }

  // Register functions to run when any page or specific pages are loaded.
  //
  // Example for running code only when `pages#home` loads:
  //
  //   App.register('pages.home').enter(function() {
  //     // Set up
  //   }).exit(function() {
  //     // Tear down (Might be needed for Turbolinks)
  //   });
  //
  // Example for running code on every page load:
  //
  //   App.register('component').enter(function() {
  //     // Set up
  //   }).exit(function() {
  //     // Tear down (Might be needed for Turbolinks)
  //   });
  app.register = function(mixed) {
    if (mixed === 'component') {
      return appComponent();
    } else {
      return appController(mixed);
    }
  };

  // Returns an object with `enter` and `exit` functions with for setting
  // up and tearing down components pages specified by the controller/action.
  function appController(controllerWithAction) {
    var body = $('body');
    var split = controllerWithAction.split('.');
    var controller = split[0];
    var action = split[1];

    // enter: ready page:load
    // exit:  page:before-unload
  }

  // Returns an object with `enter` and `exit` functions with for setting
  // up and tearing down components on each page load/change.
  function appComponent() {

  }
})();
