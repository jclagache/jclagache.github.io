$(function() {
	var bv = new Bideo();
  	bv.init({
    	// Video element
    	videoEl: document.querySelector('#video'),

    	// Container element
    	container: document.querySelector('body'),

    	// Resize
    	resize: true,

    	// autoplay: false,

    	isMobile: window.matchMedia('(max-width: 768px)').matches,

    	//playButton: document.querySelector('#play'),
    	//pauseButton: document.querySelector('#pause'),

    	// Array of objects containing the src and type
    	// of different video formats to add
    	src: [
      	{
        	src: '/videos/Hello-World.mp4',
        	type: 'video/mp4'
      	},
      	{
        	src: '/videos/Hello-World.webm',
        	type: 'video/webm;codecs="vp8, vorbis"'
      	}
    	],

    	// What to do once video loads (initial frame)
    	onLoad: function () {
      		document.querySelector('#video_cover').style.display = 'none';
    	}
  	});


	var top = $('#top-header-bg').outerHeight(true);

	$(".menu").selectOrDie({
		customID: "sod",
		placeholderOption: true,
		onChange: function() {
            var $target  = $(this).val();
            if($($target).length) {
            	$("html, body").animate({scrollTop: $($target).position().top - top}, 500);
        	}
        }
	});
	$(".sod_placeholder").typed({
		strings: ["I write code", "I write <code/>"],
		contentType: 'text',
		startDelay: 1500,
		backDelay: 1000,
		callback: function() {
			$("i.fa-angle-down").addClass('animated fadeInUp').show();
			$(".typed-cursor").hide();
			$("#sod").data("label", "I write </code>");
			$("#sod").toggleClass("ended");
		}
	});

	var stickyTop = $('#select-row').offset().top;

  	$(window).scroll(function(){
	    var windowTop = $(window).scrollTop();
	    if (stickyTop < windowTop) {
	    	$('#select-row').css({ position: 'fixed', top: '0'});
	    	$('#top-header-bg').addClass("sticky");
	    }
	    else {
	    	$('#select-row').css('position','static');
	    	$('#top-header-bg').removeClass("sticky");
	    }
	});

	$('#about-content p a[data-opens]').click(function() {
		var whatToOpens = $(this).attr('data-opens').split(',');
		$.each(whatToOpens, function(index, whatToOpenId) {
			$whatToOpen = $('[data-id="' + whatToOpenId +'"]');
    		$whatToOpen.removeClass('off').removeClass('closed').addClass('on');
    		if(!$('#about-content-footer').visible()) {
    			$("html, body").animate({scrollTop: $('#about').position().top - top}, 500);
    		}
		});
		if($(this).attr('data-closes')) {
			var whatToCloses = $(this).attr('data-closes').split(',');
			$.each(whatToCloses, function(index, whatToClose) {
	    		$('[data-id="' + whatToClose +'"]').addClass('closed');
			});
		}
		$(this).addClass('clicked');
	});

	$('.projects-slider').unslider({
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="nofx unslider-arrow prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
			next: '<a class="nofx unslider-arrow next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>'
		},
		nav: true
	});

});

