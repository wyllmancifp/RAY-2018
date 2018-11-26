
function setPageLocationType (rootIndex) {

	var idleTime = 3000;

	if (rootIndex > 0) {
		idleTime = 1500;
	}

	$(window).on('load', function() {
		LoadCustomHeader (rootIndex);
		LoadCustomFooter ();

		if (rootIndex < 20) {
			setTimeout(function(){
				$('body').addClass('loaded');
				$('h1').css('color','#222222');
				setTimeout(function(){
					$('.main-slider').addClass('animate-in');
					setTimeout(function(){
						if (rootIndex == 0) {
							$('.main-slider').removeClass('animate-in');
						}
					}, 1000);
				}, 500);
			}, idleTime);
		}
	})
}