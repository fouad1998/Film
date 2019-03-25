<?php
	//session_start()
	//$_SESSION['boooom'] = 446545;
	//$stop = 0;
	//$begin = 0;
	//echo session_id();
	//print_r($_SESSION);
	/*if(!session_start()){
		die("Erreur de chargement de Session");
	}
*/
	if($_SESSION['low'] > 4){
		$stop = 4;
	}
	else{
		$stop = $_SESSION['low'];
	}
	
	//la position où l'utilisateur se trouve
	if($_SESSION['positionRightNow'] == 0){
		 $begin = 0;
	}
	else if($_SESSION['positionRightNow'] == 1){
		$begin = 0;
	}
	else if($_SESSION['positionRightNow'] > 1){
		$begin = $_SESSION['positionRightNow'] - 1;
	}

	echo '<div  class="container">';
	echo '<ul id="barre"style="height:50px; "class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 pager">';
	echo '<li class="previous">';
	echo '<a style="font-size:15px;" class=""';
	echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=' . ($_SESSION['positionRightNow'] - 1) . '">';
	echo '<span style="font-size:15px;" class="glyphicon glyphicon-backward"></span> Précédent';
	echo '</a>';
	echo '</li>';

	for($i = 0; ($i < $stop +1) AND ($i + $begin < $_SESSION['low']); ++$i){
		echo '<li><a <a style="font-size:15px;" class="fd_buttonToGet fd_buttonToGetAsNumber"';
		if($_SESSION['positionRightNow'] == ($i + $begin)){
			echo 'id="fd_IamHereSql"';
		}
		
		echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=';
		if($i == 0){
			echo  (0) . '">';
			echo 1;
		}
		else if($i <= $stop - 1){
			echo  ($begin + $i ) . '">';
			echo $begin + $i + 1;
		}
		else if( ($_SESSION['positionRightNow'] + 1) != ($i + $begin)){
			echo  $_SESSION['low'] - 1 . '">';
			echo $_SESSION['low'];
		}
		echo '</a></li>';	
	}

	echo '<li class="next">';
	echo '<a <a style="font-size:15px;" class=""';
	echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=' . ($_SESSION['positionRightNow'] + 1) . '">';
	echo 'Suivant <span class="glyphicon glyphicon-forward" style="font-size:15px;"></span>';
	echo '</a></li></ul>';
	echo '</div>';
?>