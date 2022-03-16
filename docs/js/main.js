$(document).ready(function () {
  
    $('.menu__list').hide();
  
    $('.burger').on('click', function () {
      $(this).toggleClass('active');
      $('.menu__list').slideToggle();
    });

    $('.menu__link--trigger').on('click', function () {
      $(this).toggleClass('active');
    });

    //-----------------------------------------спрятать меню при клике вне меню
	$(document).mouseup(function (e){ // отслеживаем клик
		var block = $(".menu"); //кнопка, меню В ней
		if (!block.is(e.target)&& block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
			$('.menu__list').hide();
      $('.burger').removeClass('active');
			$('.menu__link--trigger').removeClass('active');
		}
	});
  
    $('.hero__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="hero__arrow hero__arrow--prev" type="button"><span class="sr-only">Previous slide</span><svg width="30" height="50"><use xlink:href="images/images.svg#arrow-long-up"></use></svg></button>',
      nextArrow: '<button class="hero__arrow hero__arrow--next" type="button"><span class="sr-only">Next slide</span><svg width="30" height="50"><use xlink:href="images/images.svg#arrow-long-down"></use></svg></button>',
      vertical: true,
      verticalSwiping: true,
      dots: true,
      dotsClass: "hero__dots",
      infiniti: true
    });
  
  
    // $('.paper__wrapper').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   prevArrow: '<div class="icon-long-arrow-left slick-prew serv-arrow serv-arrow-prew"></div>',
    //   nextArrow: '<div class="icon-long-arrow-right slick-next serv-arrow serv-arrow-next"></div>',
    //   dots: false,
    //   infiniti: true
    // });
  


  
  });
  
  