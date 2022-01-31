// render local date in html
$('#planner').text(moment().format("[Today is] dddd, MMMM Do YYYY"));

// declare global variables
const $plannerDiv = $('#planner');
let now;
let currentHour = moment().format('hA');

// function to render 9 timeblocks:
function renderTimeBlocks() {
  for (let hour = 9; hour <= 17; hour++) {
    // render timeblocks
    let $timeBlockDiv = $('<div>');
    $timeBlockDiv.addClass('input-group ');

    let $timeDiv = $('<div>');
    $timeDiv.addClass('input-group-prepend col-2');
    $timeBlockDiv.append($timeDiv);

    let $timeSpan = $('<span>');
    $timeSpan.addClass('input-group-text col-12');
    let time;
    let ampm;
    if (hour > 12) {
      time = hour - 12;
      ampm = "pm";
    } else {
      time = hour;
      ampm = "am";
    }
    $timeSpan.text(time + ampm);
    $timeDiv.append($timeSpan);
    
    // chose either textarea or text input and add corresponding bootstrap classes
    
    let $eventInput = $('<textarea>');
    $eventInput.addClass('form-control col-9');
    $eventInput.attr('aria-label', 'With textarea' );
    $eventInput.insertAfter($timeDiv);

    // let $eventInput = $('<input>');
    // $eventInput.attr({
    //   type:'text',
    // });
    // $eventInput.addClass('form-control');
    
    $eventInput.insertAfter($timeDiv);

    let $saveDiv = $('<div>');
    $saveDiv.addClass('input-group-append col-1');
    $saveDiv.insertAfter($eventInput);

    let $saveBtn = $('<button>');
    $saveBtn.addClass('btn btn-outline-secondary');
    $saveBtn.attr('type', 'button' );
    $saveBtn.text("save");
    $saveDiv.append($saveBtn);

    $plannerDiv.append($timeBlockDiv);
  }
  // timeblock functionality:
  // * color based on time - use moment
}

renderTimeBlocks()



/*
  TODO:

  timeblock functionality:
  * color based on time - use moment
  * function to save input to local storage
*/