$(document).ready(()=>{
	let fd_diapo = $('#fd_diapo');
	let fd_ulDiapo = $('#fd_ulDiapo');
	let fd_preDia = $('#fd_preDia');
	let fd_nextDia = $('#fd_nextDia');
	let fd_position = 0;//the main position to transition

	//diapo
	function widthOfEltInDiap () {//the width of any Element in diapo
		return Math.floor(fd_ulDiapo[0].offsetWidth / 12);
	}

	//function main of animation diapo
	function buttonAnimation () {
		let fd_tmp = widthOfEltInDiap(); // recevoire la taille d'un élément
		if(innerWidth < 800){
			if(fd_position < fd_tmp * 10){
				// translate le diapo par une unité (fd_tmp la taille d'un seul élément de diapo) 
				fd_ulDiapo.css('transition', '0.8s ease-in').css('transform', 'translateX(' + (-1)*(fd_tmp + fd_position) + 'px)');
				fd_position += fd_tmp; // position de reférence (continue translate lorsque l'événement est regénérer)				
			}
		}
		else{
			if(fd_position < fd_tmp * 8){
				// translate le diapo par une unité (fd_tmp la taille d'un seul élément de diapo) 
				fd_ulDiapo.css('transition', '0.8s ease-in').css('transform', 'translateX(' + (-1)*(fd_tmp + fd_position) + 'px)');
				fd_position += fd_tmp; // position de reférence (continue translate lorsque l'événement est regénérer)				
			}
		}
	}

	fd_nextDia.on('click', ()=>{
		buttonAnimation();
	})
	


	function buttonPreAnimation () {
		let fd_tmp = widthOfEltInDiap();
		if(fd_position > 0){
			fd_ulDiapo.css('transition', '0.8s ease-in').css("transform", 'translateX(' + (-1)*(fd_position - fd_tmp) +'px)');
			fd_position -= fd_tmp;
		}
	}

	fd_preDia.on("click", ()=>{
		buttonPreAnimation();
	})
	function mainAni(){
		var fd_thisAni = setInterval(()=>{//begin animation
			let fd_globalTmp = 0;//width of element in diap
			fd_tmp = widthOfEltInDiap(); // get it

			if(fd_position >= (fd_tmp * 8) && fd_tmp != 0){//if the position have 8*width of element in diapo
				clearInterval(fd_thisAni);
				fd_ulDiapo.css('transition', '5s ease-out').css("transform", 'translateX(0px)');
				fd_position = 0;
			}else {
				fd_ulDiapo.css('transition', '0.8s ease-out').css("transform", 'translateX(' + (-1)*(fd_position + fd_tmp) + 'px)');
				fd_position += fd_tmp;
			}
		}, 6000);

		window.onresize = ()=>{
			clearInterval(fd_thisAni);
			fd_ulDiapo.css('transition-duration','0s').css('transform','translateX(0px)');
			fd_position = 0;
			mainAni();
		}
		
		fd_diapo[0].onmouseover = ()=>{
			clearInterval(fd_thisAni);
		}
		
		fd_nextDia.on('click', ()=>{
			clearInterval(fd_thisAni)
		});

		fd_preDia.on('click', ()=>{
			clearInterval(fd_thisAni);
		});
	}
	
	mainAni();

	fd_diapo[0].onmouseout = ()=>{
		mainAni();
	}

})