(function(module) {
  var aboutController = {};

  // TODONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').show();
    console.log('AHAA!');
  };

  module.aboutController = aboutController;
})(window);
