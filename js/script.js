$(document).ready(function() {

	var previousScroll = 0;

	$(window).scroll(function(){

		var currentScroll = $(this).scrollTop();
		

		/**** Navigation Hide + Show ****/
		/* 
			If the current scroll position is greater than 0 (the top)
			AND the current scroll position is less than the document height
			minus the window height (the bottom) run the navigation if/else statement.
		*/
		if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
			/* If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav. */
			if (currentScroll > previousScroll){
				window.setTimeout(hideNav, 300);
				/* Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.*/
			} else {
				window.setTimeout(showNav, 300);
			}
			/* Set the previous scroll value equal to the current scroll.*/
			previousScroll = currentScroll;
		}

		/* Passing Points */
		// var anchor_offset = $('#content-enter').offset().top;

		// /**** Navigation White Bg Normalize ****/
		// if (currentScroll > $(document).height() - $(window).height() - anchor_offset){
		// 	$(".navbar.text-white").removeClass("text-white").addClass("bg-white has-depth");
		// } else {
		// 	$(".navbar.bg-white.has-depth").removeClass("bg-white has-depth").addClass("text-white");
		// }


	});

	function hideNav() {
		$(".navbar").removeClass("nav-down bg-white box-shadow-depth1 text-white").addClass("nav-up");
	}
	function showNav() {
		$(".navbar").removeClass("nav-up").addClass("nav-down bg-white box-shadow-depth1");
	}


	//* smooth Scrolling Select all links with hashes *//
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top -100
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	});








