<div class="container-fluid" id="fd_diapo">
    <span class="glyphicon glyphicon-chevron-left buttonPevote" id ="fd_preDia"style="left:0;"></span>
    <ul id="fd_ulDiapo"class="container">
        <?php 
            $reponse = $bdb->query('SELECT * FROM filmTabe ORDER BY views desc LIMIT 12');
            while($donnee = $reponse->fetch()){
                echo '<li class="fd_EltOfFilmLi"><div class="fd_EltOfFilmLiImg">
                <img src="' . $donnee['urlImg'] .'" alt="" class="fd_liRealImg">	
            </div><a href="#" title="'.$donnee['nom'].'">'.$donnee['nom'].'</a></li>';
            }
            $reponse->closeCursor();
        ?>
    </ul>

    <span id="fd_nextDia" class="glyphicon glyphicon-chevron-right buttonPevote" style="right:0;"></span>
</div>