//rate
let NumRate = document.querySelector('.ratevalue');
let call_ratevalue = document.querySelectorAll('.call_ratevalue');
let arr_call_ratevalue = Array.from(call_ratevalue);
arr_call_ratevalue.forEach(element => {
    element.textContent = `(${NumRate.value})`;
});
$(".rateYo").rateYo({
rating: NumRate.value,
starWidth: '13px',
numStars: 5,
minValue: 0,
maxValue: 5,
spacing: "3px",
readOnly: true,
normalFill: '#343a40',
ratedFill: '#feb808',

})       

var swiper = new Swiper('#third_sec .swiper-container', {
  speed: 1500,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

var swiper_ = new Swiper('#header .swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false,
  },
});

let card_icon = document.querySelectorAll('#header .card-icon');
let arr_card_icon = Array.from(card_icon);

arr_card_icon.forEach(element => {
  element.addEventListener('click',function(){

    arr_card_icon.forEach(ele => {
      ele.classList.remove('bg-Green-solid')
    });
    element.classList.add('bg-Green-solid')
  })
});
