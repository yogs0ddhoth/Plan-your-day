// declare global variables
const $plannerInput9 = $('#9')
const $plannerInput10 = $('#10')
const $plannerInput11 = $('#11')
const $plannerInput12 = $('#12')
const $plannerInput13 = $('#13')
const $plannerInput14 = $('#14')
const $plannerInput15 = $('#15')
const $plannerInput16 = $('#16')
const $plannerInput17 = $('#17')

// change input color based on the hour 
function updateTime() {
  // render local date in html
  $('#currentDay').text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a"));
  let schedule = [
    $plannerInput9,
    $plannerInput10,
    $plannerInput11,
    $plannerInput12,
    $plannerInput13,
    $plannerInput14,
    $plannerInput15,
    $plannerInput16,
    $plannerInput17,
  ]
  let currentHour = moment().format('H');
  // convert currentHour into a number
  let currentHourNum = Number(currentHour);
  // check currentHourNum against schedule hour h
  for (let index = 0; index < 9; index++) {
    let timeBox = schedule[index];
    let timeBoxId = timeBox.attr('id');
    if (currentHourNum > timeBoxId) {
      timeBox.addClass('past');
    } else if (currentHourNum < timeBoxId) {
      timeBox.addClass('future');
    } else {
      timeBox.addClass('present');
    }
  }
  renderPlans();
}

// update page every minute 
setInterval(function() {
  moment();
  let currentMin = moment().format('m')
  if (currentMin == 0) {
    updateTime();
  }
}, 60000)

// save textarea input value
let plansArr = new Array(9);

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