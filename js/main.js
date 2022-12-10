$(function(){
  $('.fairy-tail__slider').slick({
    prevArrow:'<button type="button" class="slick-btn slick-prev"> <img src="./images/svg/arrow-prev.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-btn slick-next"> <img src="./images/svg/arrow-next.svg" alt=""></button>',
    autoplay:true,
    fade: true,
    responsive:[/*убираю стрелки приразрешении меньше  */
      {
        breakpoint:601,
        settings:{
          arrows:false
        }
      },
    ]
    
  });

  $('.our-trip__slider').slick({
    prevArrow:'<button type="button" class="slick-btn slick-prev"> <img src="./images/svg/arrow-prev.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-btn slick-next"> <img src="./images/svg/arrow-next.svg" alt=""></button>',
    autoplay:true,
    fade: true,
    responsive:[/*убираю стрелки приразрешении меньше  */
      {
        breakpoint:601,
        settings:{
          arrows:false
        }
      },
    ]
  });
});