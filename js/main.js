(function ($) {

    //PRELOADER
    $('#preloader').delay(350).fadeOut('slow');

    // Move shape
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
    friction = 1 / 30;

    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      
      translate = 'translate(' + x + 'px, ' + y + 'px)';

      $('.banner-shape-animate img').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
      });

      window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove', function(e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();

    //Live editor broken fixed
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/tiltimage_image.default', function($scope, $){
            $scope.find('.js-tilt').tilt({
                glare: true,
                maxGlare: .5
            });
        });
    });

    //Navbar Fixed
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 85) {
            $('.navbar').addClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('fixed-top');
            $('.dark-logo').show();
            $('.main-logo').hide();
        } else {
            $('.navbar').removeClass('navcolor');
            $('.dark-logo').hide();
            $('.main-logo').show();
        }
    });  
    
 
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item) => {
      const viewLink = item.querySelector('#view-link');
      const expandedText = item.querySelector('.expanded-p');
  
      viewLink.addEventListener('click', () => {
        expandedText.classList.toggle('expanded-p');
        viewLink.querySelector('i').classList.toggle('rotate');
      });
    });
    

    //banner text
    $('.bnr-text').slick({
        autoplay: true,
        infinite: true,
        speed: 1300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //testimonials
    $('.testimonials').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // portfolio
    $('.portfolio').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      infinite: true,
      centerMode: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

})(jQuery);