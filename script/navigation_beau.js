var page_current = 0;

function set_display_elts (who) {
	// body... 
	$('#fd_diapoBeau').children().css('display','none');
	$('#fd_diapoBeau').children().slice(who, who + 1).css('display', 'block')
}

function nextPage () {
	// body... 
	if($('.active').next('.page_link').length) go_to_page(page_current + 1);
}

function previousPage () {
	// body... 
	if($('.active').pres('.page_link').length) go_to_page(page_current - 1);
}

function go_to_page (index) {
	// body... 
	page_current = index;
	set_display_elts(index);
	$('.active').removeClass('active');
	$('#id' + index).addClass('active');
}

$('body').ready(()=>{
	let nav = '<ol class="carousel-indicators">';
	let fd_elts_diapo = $('#fd_diapoBeau').children();
	let fd_number_children = fd_elts_diapo.length;

	for(i = 0; i < fd_number_children; i++){
		nav += '<li class="page_link">';
		nav += '<a class="" href="javascript:go_to_page(' + i + ')" id="id' + i + '"></a></li>';
	}
	nav += '</ul>';

	$('#bar-navigation').html(nav);
	set_display_elts(page_current);
})