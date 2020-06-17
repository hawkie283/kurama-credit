
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 18000,
    values: [ 300, 18000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(  + ui.values[ 0 ] );
      $( "#amount-1" ).val( + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-1" ).val(  + $( "#slider-range" ).slider( "values", 1 ) );
}());



$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
  e.preventDefault();
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// owl carousel

$(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
});



