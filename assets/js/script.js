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
  // check currentHourNum against timeboxId (also corresponds to scheduling hour)
  for (let index = 9; index < 18; index++) {
    let $timeBox = $('#' + index);
    let $timeBoxId = $('#' + index).attr('id');
    if (currentHourNum > $timeBoxId) {
      // past hours are styled grey
      $timeBox.addClass('past');
    } else if (currentHourNum < $timeBoxId) {
      $timeBox.addClass('future');
    } else {
      $timeBox.addClass('present');
    }
  }
  renderPlans();
}

// adds event handler to save buttons to save plans to local storage
$('.input-group').on('click', 'button', function(event) {
  let planText = $(event.target).parent().prev().val();
  console.log(planText);
  let planId = $(event.target).parent().prev().attr('id');
  console.log(planId);
  localStorage.setItem(planId, planText);

})

function renderPlans() {
  for (let index = 9; index < 18; index++) {
    $('#' + index).text(localStorage.getItem(index));
  }
}

updateTime();