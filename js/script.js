$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		cssEase: 'ease-in-out',
		infinite: false,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold:10,
		touchMove: false,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		vertical: true,
		verticalSwiping: true,
		responsive:[
			{
				breakpoint: 479,
				settings: {
					dots: false,
				}
			}
		]
	});

	$('.icon-menu').on('click', function () {
		$('.icon-menu,.menu__body').toggleClass('active');
		$('html,body').toggleClass('lock');
		$('a.menu__link').click(function () {
			$('.icon-menu,.menu__body').removeClass('active');
			$('html,body').removeClass('lock');
		});
	});

	$('.gallery__mask_1').click(function () {
		$('.gallery__image_1 a').click();
	});
	$('.gallery__mask_2').click(function () {
		$('.gallery__image_2 a').click();
	});
	$('.gallery__mask_3').click(function () {
		$('.gallery__image_3 a').click();
	});
	$('.gallery__mask_4').click(function () {
		$('.gallery__image_4 a').click();
	});

	$('.form').validate({
		rules: {
			name:{
				required: true,
				minlength: 2,
			},
			family: {
				required: true,
				minlength: 2,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
			},
			text: 'required'
		},
		messages: {
   		name: "Введите свое имя",
   		family:'Введите свою фамилию',
   		email: {
      		required: "Введите вашу электронную почту",
      		email: "Некорректный адрес электронной почты"
   		},
   		phone: 'Введите ваш номер телефона',
   		text: 'Введите ваше сообщение'
  		}
	});

	$('.form__phone').mask('+7 (999) 999-99-99');

	$('.modal__close').click(function () {
		$('.modal,.overlay').fadeOut('slow')
	});

	$('.form').submit(function (e) {
		e.preventDefault();
		var $form = $(this);
		if(! $form.valid()) return false;
		$.ajax({
			type: 'POST',
			url: '../mailer/smart.php',
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val('');
			$('.overlay').css('display','block');
			$('.modal').css('display','block');


			$('form').trigger('reset');
		});
		return false;
	});
              new WOW().init();
	

});

let sections = $('section,header');
   nav = $('.header__top');
   nav_height = nav.innerHeight();

$(window).on('scroll', function () {
  let cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    let top = $(this).offset().top - nav_height - 20,
        bottom = top + $(this).innerHeight();

    
    if (cur_pos >= top) {
      nav.find('a').removeClass('menu__link_active');
      
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('menu__link_active');
    }
    if($(window).scrollTop()+$(window).height()>=$(document).height()){
    nav.find('a').removeClass('menu__link_active');
    nav.find('a[href="#'+$(this).attr('id')+'"]').last().addClass('menu__link_active');
	}
  });
});


$('.header__top,.arrow').find('a').on('click', function () {
  let $el = $(this);
     id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 1000);
  
  return false;
});

// function rainbow() {
//   $('.form__submit').each(function() {
//     $(this).addClass('wow hingle');
//     setTimeout (function() {
//       $(this).removeClass('wow hingle');
//     }, 9000);
//   });
// }
// rainbow();
$(document).ready(function () {
	$('.form__submit').on('click', function () {
		$(this).addClass('wow hinge');
		setTimeout (function () {
			$('.form__submit').removeClass('wow hinge');
		},7000);
	});
});