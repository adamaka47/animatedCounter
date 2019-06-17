$(document).ready(function() {
	var firstScroll = true;
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		if (wScroll + 600 > $('.container').offset().top) { // Custom your height
			if (firstScroll) {
				console.log(firstScroll);
				$('.counter_num').each(function() {
					$(this).prop('Counter', 0).animate({
						Counter: $(this).text()
					}, {
						duration: 8000, // Custom speed
						easing: 'swing',
						step: function(now) {
							$(this).text(Math.ceil(now))
						}
					});
				});
				firstScroll = false;
				console.log(firstScroll);
			}
		}
	});
});