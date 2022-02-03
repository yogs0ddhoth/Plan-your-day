// update page every minute 
setInterval(function() {
  moment();
  let currentMin = moment().format('m')
  if (currentMin == 0) {
    updateTime();
  }
}, 60000)

// change input color based on the hour 
function updateTime() {
  // render local date in html
  $('#currentDay').text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a"));
  let currentHour = moment().format('H');
  // convert currentHour into a number
  let currentHourNum = Number(currentHour);
  // check currentHourNum against timeboxId (also corresponds to scheduling hour), and render plans
  for (let index = 9; index < 18; index++) {
    let $timeBox = $('#' + index);
    let $timeBoxId = $('#' + index).attr('id');
    $timeBox.text(localStorage.getItem(index));
    if (currentHourNum > $timeBoxId) {
      $timeBox.addClass('past');
    } else if (currentHourNum < $timeBoxId) {
      $timeBox.addClass('future');
    } else {
      $timeBox.addClass('present');
    }
  }
}

// adds event handler to save buttons to save plans to local storage
$('.input-group').on('click', 'button', function(event) {
  let planText = $(event.target).parent().prev().val();
  console.log(planText);
  let planId = $(event.target).parent().prev().attr('id');
  console.log(planId);
  localStorage.setItem(planId, planText);

})

updateTime();