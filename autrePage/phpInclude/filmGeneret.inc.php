<?php
	/*if(!session_start()){
		die('erreur de chargement de session');
	}*/
	static $nbrRowOfRequeste = 0;
	static $positionRightNow = 0;
	try{
		$bdb =  new PDO('mysql:host=localhost;dbname=film;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	}
		catch(Exception $e){
		die('Erreur d\'ouvirteur de page donnée'.$e->getMessage());
	}

	if( $_SESSION['pageOpened'] == 0){ //!empty($_SESSION['pageOpened']) &&
		$reponse = $bdb->query("SELECT * FROM filmTabe");
		$nbrRowOfRequeste = $reponse->rowCount();//echo $nombredElementsTotal;
		$reponse->closeCursor();
		$_SESSION['low'] = ceil(($nbrRowOfRequeste) / 20);
	}
	if(empty($_GET['nombre'])){
		$reponse = $bdb->prepare("SELECT * FROM filmTabe LIMIT 0, 20");	
	}
	else{
		$reponse = $bdb->prepare("SELECT * FROM filmTabe LIMIT :debut, 20");
		if($_GET['nombre'] >= $_SESSION['low'] ){
			$_GET['nombre'] = $_SESSION['low'] - 1;
		}
		else if($_GET['nombre'] < 0){
			$_GET['nombre'] = 0;
		}
		//echo $nombredElementsTotal;
		$debut = $_GET['nombre'] * 20;
		$_SESSION['positionRightNow'] = $_GET['nombre'];
		
		$reponse->bindParam(":debut", $debut, PDO::PARAM_INT);
	}

	/* mettre le javascript en mise a jour */
	echo '<script type="text/javascript"> var fd_positionIn = ' . ($_SESSION['positionRightNow']) .'</script>';
	echo '<script type="text/javascript"> var fd_maxRows = ' . ($_SESSION['low'] - 1) .'</script>';
	
	try{
		$reponse->execute();
	}
	catch(PDOException $e){
		die('Erreur ' .$e->getMessage());
	}

	while($donnee = $reponse->fetch()) {
?>
	<li class="fd_EltOfFilmLi">
		<div class="fd_EltOfFilmLiImg">
			<img src="<?php echo $donnee['urlImg']; ?>" alt="" class="fd_liRealImg">	
		</div>
		<a href="#" title="nomFilm"><?php $donnee['nom']; ?></a>
	</li>
	<?	};
	$_SESSION['pageOpened'] = $_SESSION['pageOpened'] + 1;
	$reponse->closeCursor();
?>