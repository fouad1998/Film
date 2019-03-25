<?
	session_start();
	$_SESSION['low'] = 0;
	$_SESSION['pageOpened'] = 0;
	$_SESSION['positionRightNow'] = 0;
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>scds dsvsgdf g</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/accueilautre.css">
    <link rel="stylesheet" type="text/css" href="../css/lesClassesAccueil.css">
	<link rel="stylesheet" type="text/css" href="../css/lesIdAccueil.css">
	<link rel="stylesheet" type="text/css" href="../css/newfilm.css">
	<style>
		#fd_listeFilm #fd_tabeNeeded table tbody tr:nth-child(even){
			background-color: #1e9a9b;
		}

		#fd_listeFilm #fd_tabeNeeded table tbody tr:nth-child(odd){
			background-color: whitesmoke;
		}
		#fd_listeFilm #fd_tabeNeeded table tbody tr:nth-child(even) td a{
			color:whitesmoke;
		}
		#fd_listeFilm #fd_tabeNeeded table tbody tr:nth-child(odd) td a{
			color:1e9a9b;
		}
		#fd_listeFilm #fd_tabeNeeded table tbody tr td a{
			font-size:25px;
		}
	</style>
</head>
<body>
<?php 
		include './phpInclude/connectionBase.inc.php';
		include './phpInclude/filtre.inc.php';
		include './phpInclude/menu.inc.php';
		include './htmlInclude/displayDemo.html';
	?>

	
	<?
		include './phpInclude/diapo.inc.php'	
	?>

	<div id="fd_listeFilm" class="container-fluid">
		<section class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
			<ul class="fd_ulListeFilm col-12">
				<?
					include './filmGeneret.inc.php';
				?>
			</ul>
		</section>

		<section id="fd_tabeNeeded" class="col-lg-4 col-md-4 col-ms-6 col-xs-6 col-lg-offset-0 col-md-offset-0 col-ms-offset-3 col-xs-offset-3">
			<table class="col-lg-12 col-md-12 col-ms-12 col-xs-12">
				<thead>
					<tr>
						<td style="background:#000000;color:white;text-align:center;height:50px;
						font-size:35px;">
							Millieu Film à regarder	
						</td>
					</tr>
				</thead>
				<tbody class="col-12">
					<?
						include './phpInclude/tabeFilm.inc.php';
					?>
				</tbody>
			</table>	
		</section><!-- ici où les élément seront place -->
	</div>

	<div id="fd_listOfEltToGet">
		<?
			include "sqlBarre.inc.php";
		?>
	</div>	
	<?
			include "footer.php";
	?>
	<script type="text/javascript" src="../script/jquery.js"></script>
	<script type="text/javascript" src="../script/film.js"></script>
	<script type="text/javascript" src="../script/buttonDiapo.js"></script>
	<script type="text/javascript" src="../script/navigate.js"></script>
	<script type="text/javascript" src="../script/mini_script/playSearchOther.js"></script>
	<script type="text/javascript" src="../script/mini_script/playMenu.js"></script>
	<script type="text/javascript" src="../script/mini_script/playMenuMobile.js"></script>
	<script type="text/javascript" src="../script/mini_script/playFilter.js"></script>
</body>
</html>