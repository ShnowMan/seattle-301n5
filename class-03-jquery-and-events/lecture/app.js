//nav handler

//event logger
function logTarget() {
  console.log(this);
  console.log($(this));

  var $target = $(this).text();
  var $newFeedback = $('#feedback p:first-child').clone();

  $newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}

//not delegated - event bound to all the 'li's
//no selector specified in .on() method


//delegated - event is bound to parent
//'li' is specified in .on()


//button handlers
//adder1

//adder2

//clear


//checkbox handler - change event.
//shows difference between attr & prop
$('input[name=check]').on('change', function() {
  var $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

//select box filtering


//DOM-ready function
$(document).ready(function() {
  $('.tab-content').hide()
})
