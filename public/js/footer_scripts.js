/*
	Author: derek moore
	Purpose: ajax
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

/*
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
code manipulation
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
	/**/
	/**/
/*
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
DOM manipulation
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
 
	// AJAX
	$('a[href="#"]').click(function(){
		var target = $(this).attr('data-target');
		console.log(target);
		$('div.content').load(target);
	})