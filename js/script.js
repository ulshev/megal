
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


	if ( /*window.innerWidth > 600 &*/ window.innerWidth < 1030 ) {
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

	$("[data-fancybox]").fancybox();

	$('.features_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: false,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1301,
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
				breakpoint: 601,
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
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 4,
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
				slidesToShow: 3,
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

	$('.campaigns_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
		dots: true,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.project_page .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.project_page .preview_slider',
	  });
	$('.project_page .preview_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.project_page .main_slider',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 4,
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

















	$('.services_slider').slick({
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		slidesToShow: 3,
		slidesToScroll: 1,
		//infinite: false,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1031,
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


	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('#news .news_block').hasClass('slick-initialized') ) {
		  $('#news .news_block').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#news .news_block').hasClass('slick-initialized') ) {
		  $('#news .news_block').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  vertical: false,
					}
				},
			]
		  });
		}
	});

	
	$('.certificates_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
		dots: false,
		//centerMode: true,
		//variableWidth: true,
		//infinite: true,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				  //slidesToScroll: 1,
				}
			},
		]
	});


	$( "#faq_accordion" )
      .accordion({
		heightStyle: "content",
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
	});
	
	// forms
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
	
	$(document).on("click", ".gUniFormModalWindowContainer, .gUniFormModalWindowExit, .gUniFormOpen, .gUniFormSuccessContainer, .gUniFormExit", function(event) {
		return event.stopImmediatePropagation();
	});
	
	$(document).on("click", function (e) {    
		modalClose();
    });

	modalOpen($('.btn-call'), $('.form-call'));
	modalOpen($('.btn-question'), $('.form-question'));
	modalOpen($('.btn-partner'), $('.form-partner'));
	modalOpen($('.btn-consultation'), $('.form-consultation'));
    modalOpen($('.btn-basket_order'), $('.form-basket_order'));
    modalOpen($('.btn-order_service'), $('.form-order_service'));

    function modalOpen(btn, form) {
        btn.on('click', function (e) {
			form.show();
			e.preventDefault();
        });
    };

    function modalClose() {
		$('.form--modal').hide();
		if ($('.form-basket_order').hasClass('success')) {
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
    // end forms
});

