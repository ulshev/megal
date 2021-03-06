$(document).ready(function() {
	// Убираем placeholder при клике в поле
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	// добавляем класс в шапку при скролле
	$(window).on('load scroll resize', function(){
		//var height = $(window).height() - 100;
		if($(this).scrollTop() > 10) {
		    $('#header').addClass('scroll');
		} else {
		    $('#header').removeClass('scroll');
		} 
	});

	// показываем языки в шапке
	$('.language').click(function(){
		if ($('.language').hasClass("show")) {
			$('.language').removeClass('show');
		}else{
			$('.language').addClass('show');
		}
	});
	
	// добавляем класс в пункты с подменю
	$('ul.menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});


	$('.search .search_button').on('click', function(e){
		if( !$(this).parent().hasClass('active') ) {
			$(this).parent().addClass('active');
		}else{
			$(this).parent().removeClass('active'); 
		}
	});

	$('.menu_btn').on('click', function(e){
		if( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(".header_main").slideDown(500);
		}else{
			$(this).removeClass('active');
			$(".header_main").slideUp(500); 
		}
	});
	if ( /*window.innerWidth > 600 &*/ window.innerWidth < 1030 ) {
	    $('.menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(".menu .submenu").removeClass('show'); 
				$(".menu .submenu").children('ul').slideUp(500);
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
		    }
		});
		$('.menu .submenu .back').on('click', function(e){
		    if( $(this).parent().hasClass('show') ) {
				$(this).parent().removeClass('show');  
				$(this).parent().children('ul').slideUp(500);
				e.preventDefault();
		    }
		});
		// $('.main_section').on('click', function(e){
		// 	if( $(".main_menu .submenu").hasClass('show') ) {
		// 		$(".main_menu .submenu").removeClass('show'); 
		// 		$(".main_menu .submenu").children('ul').slideUp(500);
		// 		//e.preventDefault();
		// 	}
		// });

		$('.foo_menu .container > .h4').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(".foo_menu .container").removeClass('show'); 
				$(".foo_menu .container").children('ul').slideUp(500);
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
			}
			else{
				$(this).parent().removeClass('show');  
				$(this).parent().children('ul').slideUp(500);
			}
		});
	};

	// Проверка заполнености полей формы
	$('.rf').each(function(){
		var form = $(this)
		//form.find('.rfield').addClass('empty_field');
	
		function checkInput(){
		  form.find('.rfield').each(function(){
			if($(this).val() != ''){
				$(this).addClass('filled_field');
			} else {
				$(this).removeClass('filled_field');
			}
		  });
		}
		setInterval(function(){
		  checkInput();
		},500);
	});
	
	$('.catalog_filter .filter_fieldset .heading').on('click', function(){
		if( $(this).parent().hasClass('show') ) {
			$(this).parent().removeClass('show');  
			$(this).parent().children('.filter_block').slideUp(500);
		} else {
			$(".filter_fieldset").removeClass('show');  
			$('.filter_block').slideUp(500);
			$(this).parent().addClass('show');  
			$(this).parent().children('.filter_block').slideDown(500);
		}
	});

	
	// animation
	if ( window.innerWidth>0 ){
		$('#header').toggleClass("hidden");
		$('.main_section').toggleClass("hidden");
		$('#header').addClass('animated');
		$('#main_screen').addClass('animated');
	};
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	if ( window.innerWidth < 601 ) {
		$(".description .tab").removeClass('active');
		$('.description .tab h3').on('click', function(){
			if( $(this).parent().hasClass('active') ) {
				$(this).parent().removeClass('active');  
				$(this).parent().children('.text').slideUp(500);
			} else {
				$(".description .tab").removeClass('active');  
				$('.description .tab .text').slideUp(500);
				$(this).parent().addClass('active');  
				$(this).parent().children('.text').slideDown(500);
			}
		});

		$('.secondary_menu').on('click', function(){
			if( $(this).hasClass('show') ) {
				$(this).removeClass('show');  
				$(this).children('ul').slideUp(500);
			} else {
				$(this).addClass('show');  
				$(this).children('ul').slideDown(500);
			}
		});
	};

	$("[data-fancybox]").fancybox();

	$(".scroll_to").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 30;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$('.features_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    //infinite: false,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		autoplay: true,
		responsive: [
			{
				breakpoint: 1351,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1030,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 701,
				settings: {
				  slidesToShow: 1,
				  dots: true,
				}
			},
		]
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1400 && $('.prod_slider').hasClass('slick-initialized') ) {
		  $('.prod_slider').slick('unslick');
		} else if ( window.innerWidth<=1400 && !$('.prod_slider').hasClass('slick-initialized') ) {
			$('.prod_slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				//centerMode: true,
				//variableWidth: true,
				infinite: true,
				//fade: true,
				prevArrow: '<span class="slick-prev">&nbsp;</span>',
				nextArrow: '<span class="slick-next">&nbsp;</span>',
				responsive: [
					{
						breakpoint: 900,
						settings: {
						slidesToShow: 2,
						}
					},
					{
						breakpoint: 450,
						settings: {
						slidesToShow: 1,
						//slidesToScroll: 1,
						}
					},
				]
			});

	
		}
	});

	$('.partners_slider').slick({
	    slidesToShow: 5,
	    //slidesToScroll: 2,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		//focusOnSelect: true,
		//initialSlide: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					  slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.projects_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		//initialSlide: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});


	$('.product_images .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.product_images .preview_slider',
	  });
	$('.product_images .preview_slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.product_images .main_slider',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1300,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1031,
		    settings: {
		      slidesToShow: 5,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 400,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		]
	});

	$('.products_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		//centerMode: true,
		//variableWidth: true,
		infinite: true,
		//fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
				slidesToShow: 4,
				}
			},
			{
				breakpoint: 1030,
				settings: {
				slidesToShow: 3,
				}
			},
			{
				breakpoint: 750,
				settings: {
				slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
				slidesToShow: 1,
				//slidesToScroll: 1,
				}
			},
		]
	});

	$('.campaigns_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
		dots: true,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.galery .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		//arrows: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.galery .preview_slider',
	  });
	$('.galery .preview_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: false,
		asNavFor: '.galery .main_slider',
		loop: true,
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				}
		  },
		]
	});


	$('.gallery_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: true,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			
			{
				breakpoint: 800,
				settings: {
				  	slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.chronology_info_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
		fade: true,
		infinite: false,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.years_slider',
	  });
	$('.years_slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
		arrows: true,
		infinite: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.chronology_info_slider',
	    dots: false,
	    centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1030,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		]
	});


	$( "#faq_accordion" )
      .accordion({
		heightStyle: "content",
        header: "> div > h3"
      });
	
	// Modal Window
    $('.form__btn-close').click(function (e) {
        modalClose();
		e.preventDefault();
    });
	
	$(document).on('keydown', function (evt) {
        if (evt.keyCode == 27) {
			evt.preventDefault();
            modalClose();
        }
    });
	
	// $(document).on("click", ".gUniFormModalWindowContainer, .gUniFormModalWindowExit, .gUniFormOpen, .gUniFormSuccessContainer, .gUniFormExit", function(event) {
	// 	return event.stopImmediatePropagation();
	// });
	
	// $(document).on("click", function (e) {    
	// 	modalClose();
	// });
	
	$('.overlay').on("click", function (e) {    
		modalClose();
	});

	modalOpen($('.btn-write'), $('.form-write'));
	modalOpen($('.btn-question'), $('.form-question'));
	modalOpen($('.btn-price'), $('.form-price'));
	modalOpen($('.btn-in_basket'), $('.form-in_basket'));
    modalOpen($('.btn-basket_order'), $('.form-basket_order'));
    //modalOpen($('.btn-order_service'), $('.form-order_service'));

    function modalOpen(btn, form) {
        btn.on('click', function (e) {
			form.show();
			e.preventDefault();
        });
    };

    function modalClose() {
		$('.form--modal').hide();
		if ($('.form-basket_order').find('p.form-note').length > 0) {
		  window.location.reload();
		}
	};
	
	$(document).ajaxSuccess(function(e) {
		$('.form__btn-close').click(function (e) {
			modalClose();
			e.preventDefault();
		});			
		
		$(document).on('keydown', function (evt) {
			if (evt.keyCode == 27) {
				evt.preventDefault();
				modalClose();
			}
		});			
		modalOpen($('.btn-basket_order'), $('.form-basket_order'));			
	});
	// end Modal Window
	

// 	$("#file").change(function(){
// 		var filename = $(this).val().replace(/.*\\/, "");
// 		$("#file_name").html(filename);
//    });

	const player = document.querySelector('#background_video video');
    if (player !== null) {
        player.oncanplay = function() { player.play() };
        player.src = player.dataset.src;
    }
});

