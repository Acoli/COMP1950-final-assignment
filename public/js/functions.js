$(document).ready(function(){

	// Page slider
	var $pageslide = $(".open");

	$pageslide.pageslide();
	$(window).resize(function() {
		$.pageslide.close();
	});

	// Accordion
	var $nonPrimaryNav = $('#mobile_nav ul');
	var $secondaryNav = $("#mobile_nav > li");
	var $tertiaryNav = $(".secondary > li");


	$nonPrimaryNav.hide();

	$secondaryNav.click(function(){
		$(this).find(".secondary").slideToggle(300);
	});

	$tertiaryNav.click(function(e){
		e.stopPropagation();
		$(this).find(".tertiary").slideToggle(300);
	});

	// CSS switch
	var $originalStyle = $('#original');
	var $projectorStyle = $('#projector');
	var $stylesheetHandle = $('#main_stylesheet_handle');

	$originalStyle.click(function(){
		$stylesheetHandle.attr('href', 'css/index.css');
	});

	$projectorStyle.click(function(){
		$stylesheetHandle.attr('href', 'css/projector.css');
	});
});