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

	/*
	function fd_animteDiapo(obj, position, sense = 1, ptrAnnition = null){
		let fd_widthOfEltDia = widthOfEltInDiap();//get the width it's necesseray 

		if(position === 0){
			obj.style.transform = 'translateX(0px)';
			return;
		}else if(innerWidth > 800){//choose the position stop
			if(position >= fd_widthOfEltDia * 8){
				clearInterval(ptrAnnition);
			}
		}else{
			if(position >= fd_widthOfEltDia * 10){
				clearInterval(ptrAnnition);
			}
		}
		obj.style.transform = 'translateX('+ (-1)*position + 'px)';//the transition effect
	}
	*/
	//function main of animation diapo
	function buttonAnimation (fd_thisAni) {
		// body... 
		if(fd_thisAni != undefined) clearInterval(fd_thisAni);
		let fd_tmp = widthOfEltInDiap(); // recevoire la taille d'un élément
		// translate le diapo par une unité (fd_tmp la taille d'un seul élément de diapo) 
		fd_ulDiapo.css('transition', '0.8s ease-in').css('transform', 'translateX(' + (-1)*(fd_tmp + fd_position) + 'px)');
		fd_position += fd_tmp; // position de reférence (continue translate lorsque l'événement est regénérer)
		/*fd_nextDia.on('click', ()=>{
			$(this).off('click', buttonAnimation);
			buttonAnimation();
		});	*/	
	}
	/*
	function buttonPreAnimation (fd_thisAni) {
		// body... 
		let fd_j = 0;
		clearInterval(fd_thisAni);
		let fd_tmp = widthOfEltInDiap();

		let fd_aniAgain = setInterval(()=>{
			fd_animteDiapo(fd_ulDiapo[0], fd_position + fd_j);
			if(fd_position <= 1 && fd_tmp != 0){
				clearInterval(fd_aniAgain);
				fd_preDia.on('click', ()=>{
					fd_preDia.off('click', buttonPreAnimation());
					buttonPreAnimation(fd_thisAni);
				});
			}
			if((-1)*fd_j >= fd_tmp && fd_tmp != 0){
				clearInterval(fd_aniAgain);
				fd_position -= fd_tmp;
				fd_preDia.on('click', ()=>{
					fd_preDia.off('click', buttonPreAnimation());
					buttonPreAnimation(fd_thisAni);
				});
			}
			fd_j -= 1;
		}, 1000/140)
	}*/

	function mainAni(){
		/*var fd_thisAni = setInterval(()=>{//begin animation
			let fd_j = 0;//compteur
			let fd_globalTmp = 0;//width of element in diap
			fd_globalTmp = widthOfEltInDiap(); // get it

			if(fd_position >= (fd_globalTmp * 8) && fd_globalTmp != 0){//if the position have 8*width of element in diapo
				clearInterval(fd_thisAni);
				let fd_vitesse = 30;
				let fd_aniEntre = setInterval(()=>{
					fd_animteDiapo(fd_ulDiapo[0], fd_position)
					if(fd_position <= 40){
						fd_vitesse = 5;
					}
					if(fd_position <= 10){
						fd_position = 0;
						fd_ulDiapo[0].style.transform = 'translateX('+ (-1)*fd_position + 'px)';
						clearInterval(fd_aniEntre);
						mainAni();
					}	
					fd_position -= fd_vitesse;
				}, 1000/30);
			}else {
				let fd_vitesse = 6;
				let fd_otherSpeed = setInterval(()=>{
					let fd_tmp = widthOfEltInDiap();
					fd_animteDiapo(fd_ulDiapo[0],fd_position + fd_j, 1, fd_otherSpeed);	
					if(fd_j >= fd_tmp - 20 && fd_j < fd_tmp - 5){
						fd_vitesse = 1;
					}
					else if(fd_j === fd_tmp && fd_tmp!=0){
						clearInterval(fd_otherSpeed);
						fd_j = 0;
						fd_position += fd_tmp;
					}
					fd_j += fd_vitesse;
				}, 1000/30);
			}
			
			window.onresize = ()=>{
				clearInterval(fd_thisAni);
				fd_animteDiapo(fd_ulDiapo[0], fd_position);
			}

		}, 6000);


		fd_diapo[0].onmouseover = ()=>{
			clearInterval(fd_thisAni);
		}
		*/
		fd_nextDia.on('click', ()=>{
			//fd_nextDia.off('click', buttonAnimation());
			buttonAnimation();
		});

		/*fd_preDia.on('click', ()=>{
			fd_preDia.off("click");
			buttonPreAnimation(fd_thisAni);
		});*/
	}
	
	mainAni();

	fd_diapo[0].onmouseout = ()=>{
		mainAni();
	}

})