(function(module) {
  var aboutController = {};

  // TODONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
