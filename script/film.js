$('body').ready(()=>{
	let fd_sousMenu = $('#fd_sousMenu');
	let fd_categorie = $("#fd_categorie");
	let fd_button = $('#fd_divButtonLoupe');
	let fd_inputSearch = $('#fd_inputSearch');
	let fd_menuNav = $('#fd_menuNav');
	let fd_ulDiapo = $('#fd_ulDiapo');


	function translateSousMenu(sense = 1) {
		// body... 
		let fd_i = 0;
		let fd_decision;

		if(innerWidth < 800){
			fd_decision = 110;
			if(sense === -1){
				fd_i = 110;
				fd_decision = 0;
			}
		}
		else{
			fd_decision = 40;
			if(sense === -1){
				fd_i = 40;
				fd_decision = 0;
			}
		}

		let fd_sousMenuAni = setInterval(()=>{
			fd_sousMenu.css("transform", 'translateY(' + fd_i * sense + 'px)');
			if(fd_i === fd_decision){
				clearInterval(fd_sousMenuAni);
			}
			if(sense === -1){
				fd_i -= 2;
			}
			else{
				fd_i += 2;
			}
		}, 1000/60);
	}

	fd_categorie.click(()=>{
		translateSousMenu();
	});

	window.onresize = ()=>{
		translateSousMenu(-1);
	};

	function removeText(eltPere) {
		var tabEltFils = eltPere.childNodes ;
		for(var i=0;i<tabEltFils.length;i++) {
			var eltFils = tabEltFils[i] ;
			if(eltFils.nodeType==3) {
				eltPere.removeChild(eltFils) ;
			}
		}
	}
	
	removeText(fd_ulDiapo[0]);// remover all text balise in ul


	/*fd_button.click(()=>{
		let fd_i = 0;
		fd_inputSearch.css('visibility','visible');
		fd_menuNav.css('display', 'none');
		let fd_ani = setInterval(()=>{
			fd_inputSearch.css('width', fd_i + '%');
			fd_i += 2;
			if(fd_i === 60){
				clearInterval(fd_ani);
			}
		}, 1000/30);
	});*/
});