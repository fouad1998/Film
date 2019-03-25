<div id="fd_titreFooter">
	<img src="../img/footer.png">
</div>
<div >
	<a href="#" title="">
		<img src="../img/fd_1.png">
	</a>
	<a href="#" title="">
		<img src="../img/fd_2.png">
	</a>
	<a href="#" title="">
		<img src="../img/fd_3.png">
	</a>
</div>
<div id="fd_compteur">
	<?php
		$fichierNombre = fopen('compteur.txt', 'r+');
		$nombre = fgets($fichierNombre);
		++$nombre;
		fclose($fichierNombre);
		$fichierEnregestrie = fopen('compteur.txt', 'w');
		fputs($fichierEnregestrie, $nombre);
		echo '<span>' . $nombre . '</span>';
		echo 'viewed';
		fclose($fichierEnregestrie);
	?>
</div>

<div id="fd_footerOption">
	<div>
		Copyright &#169;2019
	</div>
	<div id="fd_contact">
		<div>
			<a href="#" title="mettre de publicité">Mettre de Publicité</a>
		</div>
		<div>
			<a href="#" title="condition d'utilisation">Condition d'utilisation</a>
		</div>
		<div>
			<a href="#" title="contactez-nous">Contactez-nous</a>
		</div>
	</div>
</div>