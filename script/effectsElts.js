var fd_filmDivTabeTd = $('td');
var fd_exmpleOfFilm = $("#fd_exempleOfFilm");

for(let fd_i = 0; fd_i < fd_filmDivTabeTd.length; ++fd_i){//event d'affichager de bande publicitaire de film
	var fd_source = document.createElement("source");
	fd_filmDivTabeTd[fd_i].childNodes[1].onclick = (e)=>{
		e.preventDefault();
		$('body').css('overflow-y', 'hidden');
		fd_exmpleOfFilm.css("top", scrollY).css('display', "flex");
		fd_exmpleOfFilm[0].childNodes[1].innerHTML = 'Bande d\'annoce <a href="'+ fd_filmDivTabeTd[fd_i].childNodes[3].href +'">' + fd_filmDivTabeTd[fd_i].childNodes[3].innerText + "</a>"; 
		fd_source.type = 'video/mp4';
		fd_source.src = fd_filmDivTabeTd[fd_i].childNodes[3].href;
		fd_exmpleOfFilm[0].childNodes[3].appendChild(fd_source);
		fd_exmpleOfFilm[0].childNodes[3].autoplay = true;
	}
}

$('#fd_exempleOfFilm div button:nth-child(1)').click(()=>{

});

$('#fd_exempleOfFilm div button:nth-child(2)').click(()=>{
	$('body').css("overflow-y", 'visible');
	fd_exmpleOfFilm.css("display", 'none');
	//fd_exmpleOfFilm.childNodes[3].pause();
	var ff = $('#fd_video');
	ff[0].pause();
});