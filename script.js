// var button = document.getElementById('startBtn');
// var slide = document.getElementById('current');
// var preSlide =  document.getElementById('previous');
// var megiieCard = document.getElementById('megiieRedy');

// button.addEventListener('click',startCount);

// var counter = document.getElementById('digitCounter'); 
// var interval;

// function startCount(){
//     let maxCount = document.querySelector('#maxCount').value;
//     let temp = 0;
//     interval = setInterval(function setCount(){
//         if(maxCount< temp){
//             clearInterval(interval);
//             megiieCard.style.display = 'inline-block';
//             return;
//         }
//         slide.classList.add('animation');
//         slide.innerHTML = temp;
//         setTimeout(function(){
//             slide.classList.remove('animation');
//             preSlide.innerHTML = temp;
//             temp++;
//         },1000);
//     }, 2000);
// }


var button = document.getElementById('startBtn');
var slide = document.getElementById('current');
var preSlide = document.getElementById('previous');
var megiieCard = document.getElementById('megiieRedy');
var counter = document.getElementById('digitCounter');
var interval;

button.addEventListener('click', startCount);

function startCount() {
  var maxCount = document.querySelector('#maxCount').value;
  var temp = 0;

  // Clear any previous intervals
  clearInterval(interval);

  // Start a new interval
  interval = setInterval(function() {
    if (temp >= maxCount) {
      // Stop the interval and show the completion message
      clearInterval(interval);
      megiieCard.style.display = 'inline-block';
    } else {
      // Update the count and previous slide
      slide.classList.add('animation');
      slide.innerHTML = temp;
      setTimeout(function() {
        slide.classList.remove('animation');
        preSlide.innerHTML = temp;
        temp++;
      }, 1000);
    }
  }, 2000);
}