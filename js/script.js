$(document).ready(function() {

	var previousScroll = 0;

	$(window).scroll(function(){

		var currentScroll = $(this).scrollTop();
		/* Passing Points */
		var anchor_offset = $('#content-enter').offset().top;

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



		/**** Navigation White Bg Normalize ****/
		if (currentScroll > $(document).height() - $(window).height() - anchor_offset){
			$(".navbar.text-white").removeClass("text-white").addClass("bg-white has-depth");
		} else {
			$(".navbar.bg-white.has-depth").removeClass("bg-white has-depth").addClass("text-white");
		}


	});



	function hideNav() {
		$(".navbar").removeClass("nav-down").addClass("nav-up");
	}
	function showNav() {
		$(".navbar").removeClass("nav-up").addClass("nav-down");
	}


});








