$(document).ready(function(){
	// Page slider
	$(".open").pageslide();

	// Accodion
	$('#mobile_nav ul').hide();

	$("#mobile_nav > li").click(function(){
		$(this).find(".secondary").slideToggle(300);
	});

	$(".secondary > li").click(function(e){
		e.stopPropagation();
		$(this).find(".tertiary").slideToggle(300);
	});

	
});