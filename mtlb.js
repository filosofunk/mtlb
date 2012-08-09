$(function () {
		var brandBluster = 1.8;  // Logo magnification x-factor
		
		// Good chance your egocentric company uses its own name instead of "logo" - make your adjustments here.
		var nameMatch = "logo";
		var idMatch = "logo";
		var srcMatch = "logo";
		var classMatch = "logo";
		$("img[name*="+nameMatch+"],img[id*="+idMatch+"],img[src*="+srcMatch+"],img[class*="+classMatch+"]").each(function() {
			$(this).load(function() {
				var newHeight = $(this).height() * brandBluster;
				var newWidth = $(this).width() * brandBluster;
				$(this).height(newHeight).width(newWidth);
			});
		});
});