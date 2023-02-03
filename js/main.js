
 $('.slider-for').slick({
    
  arrows: false,
  fade: true,
  asNavFor: '.your-class'
});
$('.your-class').slick({
  asNavFor: '.slider-for',
});