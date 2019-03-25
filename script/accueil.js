$(document).ready(()=>{
	var fd_parallax = document.getElementsByClassName("fd_parallax")[0];
	var fd_menu = document.getElementById("fd_menu");
	var fd_titrePage = document.getElementById("fd_titrePage");
	var fd_tetePage = document.getElementById("fd_tetePage");
	var fd_menuNav = document.getElementById("fd_menuNav");
	var fd_headerPage = document.getElementById('fd_headerPage');
	var fd_searchZone = document.getElementById("fd_searchZone");
	var fd_button = document.getElementById("fd_button");
	var fd_searchZoneInput = document.getElementById("fd_searchZone").getElementsByTagName("input")[0];
	var fd_eltNeeded = document.getElementById("fd_hrZoneSearch");
	var fd_fermerBarreOption = document.getElementById("fd_fermerBarreOption");
	var fd_fermerButtonBarreOption = document.getElementById("fd_fermerBarreOption").getElementsByTagName("button")[0];
	var fd_fermerButtonBarreOptionImg = document.getElementById("fd_fermerBarreOption").getElementsByTagName("button")[0].getElementsByTagName("img")[0];
	var fd_footer = document.getElementsByTagName("footer")[0];
	var fd_parallaxTable = document.getElementsByClassName("fd_parallax");
	var fd_retoureHaut = document.getElementById("fd_retoureHaut");
	var fd_test = document.getElementsByClassName("fd_test");//tous les élément qui sont charger de recevoire d'autre éléments
	var fd_filmDivTabe = document.getElementsByClassName("fd_filmDivTabe");//élément parent de tableau
	var fd_filmDivTabeTd = document.getElementsByTagName('td');//récuperer tous les éléments td dans le tableau
	var fd_niceMessageShow = document.getElementById("fd_niceMessageShow");//message sur menu
	let fd_imgSocial = document.getElementsByClassName('fd_imgSocial');


	function changerTitrePosition(sense){//fonction qui ce charger de déplace le titre dans le menu
		if(sense === true){
			fd_titrePage.id = '';
			fd_titrePage.classList.add("fd_autreCasTitre");//on donne une class pour pouvoir changer de désigne à l'aide de css
			fd_menu.insertBefore(fd_titrePage, fd_menuNav);
		}
		else{	
			/*body ...*/
			fd_titrePage.id = 'fd_titrePage';
			fd_titrePage.classList.remove("fd_autreCasTitre");
			fd_headerPage.appendChild(fd_titrePage);
		}
	}

	function marginElt(obj, length) {
		/* body... */
		obj.style.marginTop = Math.ceil(length * 0.2) + "px";
	}

	function menuManager() {/* la fonction qui gére le tous les cas de la taille de la page pour le menu */
		let fd_windowHeight = window.innerHeight;
		let fd_windowWidth = window.innerWidth;
		let fd_heritageSurface;

		if(fd_windowHeight < 500){
			fd_windowHeight = 500;
		}
		let fd_distanceBetweenMenuAndTop = Math.ceil(fd_windowHeight * 0.7);
		let fd_heightForMenuParent = Math.floor(fd_windowHeight * 0.3);
		
		let fd_heightPourAutreElt = fd_distanceBetweenMenuAndTop + fd_heightForMenuParent * 0.6; 
		//la tailler que les autre élément vont prendre

		fd_tetePage = $(fd_tetePage); //object jquery

		if(fd_windowWidth > 800){//vérifie le taille de la page en largeur
			
			fd_tetePage.append(fd_menu); //remettre le menu a sa place

			fd_tetePage.css('top' , fd_distanceBetweenMenuAndTop + 'px');///element parent de menu
			fd_tetePage.css('height', Math.floor(fd_heightForMenuParent) + 'px');// la tailler d'élément parent de menu

			fd_heritageSurface = fd_heightForMenuParent;//tailler qui va être partagé avec le titre et le menu
			fd_parallax.style.height =(fd_windowHeight) + 'px';
			//les élément concerne
			fd_menu.style.height = Math.ceil(fd_heritageSurface * 0.4) + 'px';//tailler de menu
			fd_titrePage.style.height = Math.ceil(fd_heritageSurface *0.4) + 'px';//taille de titre
			fd_footer.style.height = fd_heightPourAutreElt + 'px';//tailler de footer

			//les autre éléments que le menu
			for(let fd_i = 0; fd_i < fd_test.length; ++fd_i){//mettre de la bon tailler au éléments qui sont charger de recevoire
				fd_test[fd_i].style.height = fd_heightPourAutreElt * 2 + 'px';
				fd_filmDivTabe[fd_i].style.height = Math.floor(fd_heightPourAutreElt * 1.8) + 'px';
				fd_parallaxTable[fd_i].style.height = fd_windowHeight + 'px';
			}

			for(let fd_i = 0; fd_i < fd_filmDivTabeTd.length; ++fd_i){
				if(fd_i % 8 > 1){
					fd_filmDivTabeTd[fd_i].style.width = Math.floor(fd_windowWidth * 0.3) + 'px';
					fd_filmDivTabeTd[fd_i].style.height = Math.floor(fd_heightPourAutreElt * 1.8 * 0.25) + 'px';
				}
				else{
					if( (fd_i % 8) === 1 ){
						fd_filmDivTabeTd[fd_i].style.width = Math.floor(fd_windowWidth * 0.3) + 'px';
						fd_filmDivTabeTd[fd_i].style.height = Math.floor(fd_heightPourAutreElt  * 2 * 0.9 * 0.25 * 1.75) + 'px';		
					}
					else if( (fd_i % 8) === 0){
						fd_filmDivTabeTd[fd_i].style.width = Math.floor(fd_windowWidth * 0.3 * 2.14 ) + 'px';
						fd_filmDivTabeTd[fd_i].style.height = Math.floor(fd_heightPourAutreElt * 2 * 0.9 * 0.25 * 1.75) + 'px';
					}
				}
			}
			//fin de management de page
		}

		else{
			fd_heightPourAutreElt *= 3;
			document.body.insertBefore(fd_menu, fd_searchZone);
			fd_tetePage.css('top','0'); //remmetre en place
			fd_menu.style.marginTop = 0 + 'px';//enlever le margin top de menu

			let fd_trObjTmp = $('td');
			fd_trObjTmp.css('width', '45%').css('height', fd_heightPourAutreElt / 12 + 'px')

			for(let fd_i = 0; fd_i < fd_test.length; ++fd_i){
				fd_test[fd_i].style.height = fd_heightPourAutreElt + 'px';
			}
		}
	}


	function colorDesignFnct() {// cette fonction en gros elle se charger de modifier l'état de notre menu en mettant dedans le nom de la zone où il se trouve l'utilisateur
		// body... 
		var fd_uniteDeCalculer = window.innerHeight;
		if(fd_uniteDeCalculer < 500){
			fd_uniteDeCalculer = 500;
		}

		var fd_differenceDeBarreMenu = Math.floor(fd_uniteDeCalculer * 0.3 * 0.4);//le tailler de menu 

		var fd_uniteDeCalculerAutreElt = Math.floor(fd_uniteDeCalculer * 0.7) + Math.floor(fd_uniteDeCalculer*0.3*0.6);

		var fd_autorisation = true;
		fd_niceMessageShow.style.color = "white";
		if(window.scrollY >= fd_uniteDeCalculer * 2 - fd_differenceDeBarreMenu && window.scrollY <= (fd_uniteDeCalculer * 2 + fd_uniteDeCalculerAutreElt * 2) - fd_differenceDeBarreMenu ){
			fd_niceMessageShow.innerText = "New movies";
			fd_niceMessageShow.style.display = 'block';
			fd_menuNav.style.display = 'none';
			fd_titrePage.style.display = 'none';
			fd_divButtonLoupe.style.display ='none';
			fd_menu.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
			fd_menu.style.borderBottom = '2px solid white';
		}
		else{
			if(window.scrollY >= (fd_uniteDeCalculer * 3 + fd_uniteDeCalculerAutreElt * 2) - fd_differenceDeBarreMenu && window.scrollY <= (fd_uniteDeCalculer * 3 + fd_uniteDeCalculerAutreElt * 4) - fd_differenceDeBarreMenu ){
				fd_niceMessageShow.innerText = "Most viewed";
				fd_niceMessageShow.style.display = 'block';
				fd_menuNav.style.display = 'none';
				fd_titrePage.style.display = 'none'
				fd_divButtonLoupe.style.display ='none';

				fd_menu.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
				fd_menu.style.borderBottom = '2px solid white';
			}

			else if(window.scrollY >= (document.body.scrollHeight - fd_uniteDeCalculerAutreElt - fd_differenceDeBarreMenu) - 5){ //om met 5 comme le taux d'erreur max dans ce cas
				fd_menu.style.backgroundColor = 'rgba(12,12,12,0.9)';
				fd_menu.style.borderBottom = '2px solid white';
				fd_menuNav.id ="";
				fd_niceMessageShow.style.display = 'none';
				fd_menuNav.style.display = 'block';
				fd_titrePage.style.display = 'block'
				fd_divButtonLoupe.style.display ='flex';
				fd_menuNav.classList.add('fd_basDePage');
				fd_titrePage.classList.add('fd_titreDansEtatNoir');
				fd_button.childNodes[1].src = './img/fd_loupeb.png';
				fd_autorisation = false;
			}

			else if(window.scrollY >= (fd_uniteDeCalculer * 4 + fd_uniteDeCalculerAutreElt * 4) - fd_differenceDeBarreMenu && window.scrollY <= (fd_uniteDeCalculer * 4 + fd_uniteDeCalculerAutreElt * 6) - fd_differenceDeBarreMenu - 5){
				fd_menu.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
				fd_niceMessageShow.innerText = "Suggestion";
				fd_niceMessageShow.style.display = 'block';
				fd_menuNav.style.display = 'none';
				fd_titrePage.style.display = 'none';
				fd_divButtonLoupe.style.display ='none';
				fd_button.childNodes[1].src = './img/fd_loupe.png';

				fd_menu.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
				fd_menu.style.borderBottom = '2px solid white';
			}
			else if(scrollY == 0){
				fd_menu.style.background = 'whitesmoke';
				fd_autorisation = false;
			}
			else{
				fd_menu.style.backgroundColor = "white";
				fd_niceMessageShow.style.display = 'none';
				fd_menuNav.style.display = 'block';
				fd_titrePage.style.display = 'block'
				fd_divButtonLoupe.style.display ='flex';
				fd_menuNav.id = "fd_menuNav";
				fd_menuNav.classList.remove('fd_basDePage');
				fd_titrePage.classList.remove('fd_titreDansEtatNoir');
				fd_autorisation = false;

				fd_menu.style.backgroundColor = 'white';
			}
		}

		fd_menu.onmouseover = ()=>{
			if(fd_autorisation){
				fd_niceMessageShow.style.display = 'none';
				fd_menuNav.style.display = 'block';
				fd_titrePage.style.display = 'block'
				fd_divButtonLoupe.style.display ='flex';
				fd_menu.style.backgroundColor = 'white';
			}
		}
		fd_menu.onmouseout = ()=>{
			if(fd_autorisation === true){
				fd_niceMessageShow.style.display = 'block';
				fd_menuNav.style.display = 'none';
				fd_titrePage.style.display = 'none';
				fd_divButtonLoupe.style.display ='none';
				fd_menu.style.backgroundColor = 'rgba(10,10,10,0.95)';
			}
		}
	}

	menuManager(); //premier appel à la fonction pour positionné le menu

	window.onresize = ()=>{
		menuManager();
	}

	function relouerJusqueTop(){//rendre l'utilisateur a l'haut de la page
		var fd_compteur = window.scrollY;

		var fd_animationZone = setInterval(()=>{
			if(fd_compteur > 250){
				fd_compteur -= 200;
			}
			else{
				fd_compteur -= 5;
			}
			window.scrollTo(0, fd_compteur);
			if(fd_compteur <= 5){
				clearInterval(fd_animationZone);
				window.scrollTo(0,0);
			}
		}, 1000/30);
	}

	fd_retoureHaut.onclick = ()=>{
		relouerJusqueTop();
	}

	window.onscroll = ()=>{ //durant le page se déroule
		if(window.innerWidth > 800){
			let fd_heightPage = innerHeight;
			if(fd_heightPage < 500){
				fd_heightPage = 500;
			}
			let fd_heightForMenuChild = Math.floor(fd_heightPage * 0.3);
			fd_heightForMenuChild = Math.ceil(fd_heightForMenuChild * 0.4);
			if(scrollY >= (fd_heightPage - fd_heightForMenuChild)){
				fd_menu.style.position = 'fixed';
				fd_menu.style.margin = 0;
				fd_menu.style.top = 0;
				fd_menu.style.left = 0;
				changerTitrePosition(true);
				$(fd_retoureHaut).show(700);
				colorDesignFnct();
			}
			else{
				fd_menu.style.position = 'static';
				changerTitrePosition(false);
				fd_retoureHaut.style.visibility = 'hidden';
				colorDesignFnct();
			}
		}
		else if(window.innerWidth > 600){//pour le cas de tailler d'écran entre 600px-1024px
			changerTitrePosition(false);
		}
	}

	/* la zone de  la barre de la rechercher Zone Text */
	fd_button.onclick = ()=>{/* gére l'évenement de button loupe */
		let fd_objQuery = $(fd_searchZone);
		if(fd_searchZone.offsetTop === (-200)){
			fd_objQuery.css('transition', '1.3s ease-out').css('top', '-7px');
		}
		else{
			fd_objQuery.css('top', '-200px');
		}
	}


	for(let fd_i = 0; fd_i < fd_imgSocial.length; ++fd_i){
		fd_imgSocial[fd_i].onmouseover = ()=>{
			fd_imgSocial[fd_i].src = "./img/fd_" + (fd_i + 1) + '.png';
		}

		fd_imgSocial[fd_i].onmouseout = ()=>{
			fd_imgSocial[fd_i].src = "./img/fd__" + (fd_i + 1) + '.png';
		}
	}


	// des animation de zone de rechercher
	function changerColorAnimationHr (obj, firstColor, secondeColor, duration, which) {
		// body...
		var setAnimationColor;
		var whichWay = 0;

		if(which === true){ //setInteval cas
			setAnimationColor = setInterval(()=>{
				if(whichWay % 2 === 0){
					obj.style.backgroundColor = firstColor;
					if(whichWay === 390) whichWay = 0;
				}
				else{
					obj.style.backgroundColor = secondeColor;
				}
				++whichWay;
			}, duration);
		}
	}

	//laisse pour après O.K

	fd_searchZoneInput.oninput = (e)=>{
		fd_searchZoneInput.style.color = "red";	
		fd_searchZoneInput.onkeyup = ()=>{
			fd_searchZoneInput.style.color = "white";
		}
		if(e.charCode === 0){//quand l'uilisateur tape sur entrée le départ d'yne rechercher

		}
	}

	function rendreElementMenu() {//fonction qui gére de rendre l'élément a sa place
		if(fd_searchZone.offsetTop == (-7)){
			let fd_objQuery = $(fd_searchZone);
			fd_objQuery.css('top', '-200px');
		}
	}

	//couté de menu
	fd_fermerBarreOption.onmouseover = ()=>{
		fd_fermerButtonBarreOptionImg.src = './img/fermerExp2.png';
	}

	fd_fermerBarreOption.onmouseout = ()=>{
		fd_fermerButtonBarreOptionImg.src = "./img/fermerExp1.png";
	}

	fd_fermerButtonBarreOption.onclick = ()=>{
		rendreElementMenu();
	}

	fd_searchZoneInput.onblur = ()=> { //remettre le menu à sa place
		/* body... */
		rendreElementMenu();
	};
})