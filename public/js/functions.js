$(document).ready(function(){
	// Page slider
	$(".open").pageslide();

	// Accordion
	$('#mobile_nav ul').hide();

	$("#mobile_nav > li").click(function(){
		$(this).find(".secondary").slideToggle(300);
	});

	$(".secondary > li").click(function(e){
		e.stopPropagation();
		$(this).find(".tertiary").slideToggle(300);
	});

	// CSS switch
	$('#original').click(function(){
		$('#main_stylesheet_handle').attr('href', 'css/index.css');
	});

	$('#projector').click(function(){
		$('#main_stylesheet_handle').attr('href', 'css/projector.css');
	});


	/*
		DONT FORGET TO CACHE THE DOM
	*/
});