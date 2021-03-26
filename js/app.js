

////show_loop
function loop_show_rate(loop_class_item) {
  if(document.querySelector(`.${loop_class_item}`)){
    let loop_item = document.querySelectorAll(`.${loop_class_item}`);
    let arr_loop_item = Array.from(loop_item);
    arr_loop_item.forEach(ele => {
      ele.children[0].textContent = `(${ele.children[2].children[0].value})`;
      $(ele.children[1]).rateYo({
        rating: ele.children[2].children[0].value,
        starWidth: '12px',
        numStars: 5,
        minValue: 0,
        maxValue: 5,
        spacing: "5px",
        readOnly: true,
        normalFill: '#b3b3b3',
        ratedFill: '#e9b300',
    
      }) 
      
    });    
  }
}
loop_show_rate(`comment_rate_trip`)
loop_show_rate(`comment_rate`)
loop_show_rate(`rate_guide`)
loop_show_rate(`ratevalue`)



///////////////show
function Show_rate(class_item) {
  if(document.querySelector(`.${class_item}`)){
    let item = document.querySelector(`.${class_item}`);
    item.children[0].textContent = `(${item.children[2].value})`;
    $(item.children[1]).rateYo({
      rating: item.children[2].value,
      starWidth: '15px',
      numStars: 5,
      minValue: 0,
      maxValue: 5,
      spacing: "5px",
      readOnly: true,
      normalFill: '#b3b3b3',
      ratedFill: '#e9b300',
  
    }) 
  }
  
}
Show_rate(`rate_guide_profile`);

Show_rate(`rate_tripe`);



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


//payMethode
if(document.querySelector('.pay_method')){
  let pay_method = document.querySelectorAll('.pay_method');
  let arr_pay_method = Array.from(pay_method);
  arr_pay_method.forEach(element => {
    element.addEventListener('click',function(){
      arr_pay_method.forEach(ele => {
        ele.classList.remove('active_pay_method');
      });
      element.classList.add('active_pay_method');
    })

  });
}