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
		$begin = $_SESSION['positionRightNow'] - 2;
	}

	echo '<a class="fd_buttonToGet fd_buttonToGetAsNumber"';
	echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=' . ($_SESSION['positionRightNow'] - 1) . '">';
	echo "< <span>Precedent</span>";
	echo '</a>';

	for($i = 0; $i < $stop; ++$i){
		echo '<a class="fd_buttonToGet fd_buttonToGetAsNumber"';
		if($_SESSION['positionRightNow'] == $i){
			echo 'id="fd_IamHereSql"';
		}
		
		echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=' . ($begin + $i) . '">';
		if($i < 3){
			echo $begin + $i + 1;
		}
		else{
			echo $_SESSION['low'];
		}
		echo '</a>';	
	}

	echo '<a class="fd_buttonToGet fd_buttonToGetAsNumber"';
	echo 'href="http://'. $_SERVER['HTTP_HOST'] .'/www/Film-Web/autrePage/film.php?nombre=' . ($_SESSION['positionRightNow'] + 1) . '">';
	echo "<span>Next</span> >";
	echo '</a>';
?>