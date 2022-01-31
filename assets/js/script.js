// declare global variables
const $plannerDiv = $('#planner');

// jquery method of rendering timeblocks:

//  timeblock div
let $timeBlockDiv = $('<div>');
$timeBlockDiv.addClass('input-group');

let $timeDiv = $('<div>');
$timeDiv.addClass('input-group-prepend');
$timeBlockDiv.append($timeDiv);

let $timeSpan = $('<span>');
$timeSpan.addClass('input-group-text');
  // render hour in $timeSpan
  $timeSpan.text();
$timeDiv.append($timeSpan);

// chose either textarea or text input and add corresponding bootstrap classes
let $eventInput = $('<textarea>');
$eventInput.addClass('form-control');
$eventInput.attr('aria-label', 'With textarea' );
$eventInput.insertAfter($timeDiv);

// let $eventInput = $();
// $eventInput.addClass();
// $eventInput.insertAfter($timeDiv);

let $saveDiv = $('<div>');
$saveDiv.addClass('input-group-append');
$saveDiv.insertAfter($eventInput);

let $saveBtn = $('<button>');
$saveBtn.addClass('btn btn-outline-secondary');
$saveBtn.attr('type', 'button' );
$saveBtn.text("save");
$saveDiv.append($saveBtn);

$plannerDiv.append($timeBlockDiv);
/*
  timeblock functionality:
  * color based on time - moment
  * function to save input to local storage
*/