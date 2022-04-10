function preloaderLoad() {
	if ($('.preloader').length) {
		$('.preloader').delay(300).fadeOut(300);
	}
}

$(window).on('load', function() {
	preloaderLoad();
});


$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});


$(window).scroll(function() {

	if ($(window).scrollTop() > 50) {

		$('nav').addClass('shrink');

	} else {

		$('nav').removeClass('shrink');

	}

});



$('#banner').owlCarousel({

	loop: true,

	nav: true,

	animateOut: 'fadeOut',

	animateIn: 'fadeIn',

	autoplay: true,

	autoplayTimeout:8000,

	center: true,

	startPosition: 1,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});


$('#recommend').owlCarousel({

	loop: true,

	nav: false,

	animateOut: 'fadeOut',

	animateIn: 'zoomIn',

	autoplay: true,

	center: true,

	startPosition: 3,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});



$('#brand').owlCarousel({

	loop: true,

	nav: true,

	autoplay: true,

	center: true,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 3

		},

		1000: {

			items: 5

		}

	}

});



$(document).ready(function() {

	$('.parallax-window').parallax({});

});



$(document).ready(function() {

	/* Get iframe src attribute value i.e. YouTube video url

	and store it in a variable */

	var url = $("#Video").attr('src');



	/* Assign empty url value to the iframe src attribute when

	modal hide, which stop the video playing */

	$("#myModal").on('hide.bs.modal', function() {

		$("#Video").attr('src', '');

	});



	/* Assign the initially stored url back to the iframe src

	attribute when modal is displayed again */

	$("#myModal").on('show.bs.modal', function() {

		$("#Video").attr('src', url);

	});

});



$(document).ready(function() {

	$('#banner .owl-nav .owl-prev').html("<i class=" + "fa-angle-left" + "></>");

	$('#banner .owl-nav .owl-prev i').addClass("fa");

	$('#banner .owl-nav .owl-next').html("<i class=" + "fa-angle-right" + "></>");

	$('#banner .owl-nav .owl-next i').addClass("fa");

});





$('#gallery').owlCarousel({

	loop: true,

	autoplay: true,

	center: true,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 5

		},

		1000: {

			items: 5

		}

	}

});





$('#testimonial').owlCarousel({

	loop: true,

	autoplay: true,

	center: true,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});





/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/

$(document).ready(function() {



	//window and animation items

	var animation_elements = $.find('.analysis-animation');

	var web_window = $(window);



	//check to see if any animation containers are currently in view

	function check_if_in_view() {

		//get current window information

		var window_height = web_window.height();

		var window_top_position = web_window.scrollTop();

		var window_bottom_position = (window_top_position + window_height);



		//iterate through elements to see if its in view

		$.each(animation_elements, function() {



			//get the element sinformation

			var element = $(this);

			var element_height = $(element).outerHeight();

			var element_top_position = $(element).offset().top;

			var element_bottom_position = (element_top_position + element_height);



			//check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)

			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {

				element.addClass('progress');

			} 

			else {



			}

		});

	}



	//on or scroll, detect elements in view

	$(window).on('scroll resize', function() {

			check_if_in_view()

		})

		//trigger our scroll event on initial load

	$(window).trigger('scroll');



});



$(document).ready(function( $ ) {

	$('.counter').counterUp({

		delay: 10,

		time: 1000

	});

});



$('#client').owlCarousel({

	loop: true,

	nav: true,

	// animateOut: 'fadeOut',

	// animateIn: 'fadeIn',

	autoplay: true,

	center: true,

	startPosition: 1,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 3

		},

		1000: {

			items: 3

		}

	}

});





$(document).ready(function() {

	$('div.team-members').mouseenter(function() {

		$('.active').removeClass('active');

		$(this).addClass('active');

	})

});





$('#shop-slider').owlCarousel({

	loop: true,

	animateOut: 'fadeOut',

	animateIn: 'fadeIn',

	autoplay: true,

	center: true,

	startPosition: 3,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});





$('#comming-soon-banner').owlCarousel({

	loop: true,

	nav: true,

	animateOut: 'fadeOut',

	animateIn: 'fadeIn',

	autoplay: false,

	center: true,

	startPosition: 1,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});



$(document).ready(function() {

	$('#comming-soon-banner .owl-nav .owl-prev').html("<i class=" + "fa-angle-left" + "></>");

	$('#comming-soon-banner .owl-nav .owl-prev i').addClass("fa");

	$('#comming-soon-banner .owl-nav .owl-next').html("<i class=" + "fa-angle-right" + "></>");

	$('#comming-soon-banner .owl-nav .owl-next i').addClass("fa");

});



$(document).ready(function() {

	$('.navigation-bar li').click(function() {

		$(this).siblings('li.active').removeClass('active');

		$(this).addClass('active');

		var index = $(this).index();

		$('.navigation-text-cover>.navigation-text').removeClass('active')

		$('.navigation-text-cover>.navigation-text').eq(index).addClass('active');

		console.log($(this).eq(index));

		if($(".navigation-text").hasClass('active')){

			$('.navigation-text').addClass('animated slideInUp');

		}

	})

});







$('#portfolio-slider').owlCarousel({

	loop: true,

	nav: false,

	animateOut: 'fadeOut',

	animateIn: 'zoomIn',

	autoplay: true,

	center: true,

	startPosition: 3,

	responsive: {

		0: {

			items: 1

		},

		600: {

			items: 1

		},

		1000: {

			items: 1

		}

	}

});





$(document).ready(function() {

	$('.login-click').click(function(){

		$('form.login-form').toggle("slow");

	})

	$('.coupon-click').click(function(){

		$('.apply-coupon').toggle("slow");

	})

});





$(document).ready(function(){

	if(screen.width>767) {

		$('li.dropdown').mouseenter(function(){

			$(this).children('ul.dropdown-menu').addClass('show');

		})

		$('li.dropdown').mouseleave(function(){

			$(this).children('ul.dropdown-menu').removeClass('show');

		})
	}

});


$(function(){

	var $gallery = $('.gallery a').simpleLightbox();



	$gallery.on('show.simplelightbox', function(){

		console.log('Requested for showing');

	})

	.on('shown.simplelightbox', function(){

		console.log('Shown');

	})

	.on('close.simplelightbox', function(){

		console.log('Requested for closing');

	})

	.on('closed.simplelightbox', function(){

		console.log('Closed');

	})

	.on('change.simplelightbox', function(){

		console.log('Requested for change');

	})

	.on('next.simplelightbox', function(){

		console.log('Requested for next');

	})

	.on('prev.simplelightbox', function(){

		console.log('Requested for prev');

	})

	.on('nextImageLoaded.simplelightbox', function(){

		console.log('Next image loaded');

	})

	.on('prevImageLoaded.simplelightbox', function(){

		console.log('Prev image loaded');

	})

	.on('changed.simplelightbox', function(){

		console.log('Image changed');

	})

	.on('nextDone.simplelightbox', function(){

		console.log('Image changed to next');

	})

	.on('prevDone.simplelightbox', function(){

		console.log('Image changed to prev');

	})

	.on('error.simplelightbox', function(e){

		console.log('No image found, go to the next/prev');

		console.log(e);

	});

});



