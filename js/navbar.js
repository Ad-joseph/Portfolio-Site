$(document).ready(function() {

  var scrollLink = $('.scroll');

  // smooth scrolling
  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500 )

  })

  // Active link switching
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function() {

    var sectionOffset = $(this.hash).offset().top + 60;

    if ( sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass('active')
      $(this).parent().siblings().removeClass('active')

    }

  })

})


})
