<div class="fd_test container-fluid"style="padding-bottom:50px;">
    <div class="text-center jumbotron success ">
        <h1>Nouveautés</h1>
    </div>

    <?
        $reponse =  $bdb->query('SELECT * FROM filmTabe ORDER BY ID DESC LIMIT 18');
        $i = 0;
        //la premier partie 
    ?>

    <div class="row hidden-sm hidden-xs"> 
        <!-- php -->
        <?
            for($i = 0; $i < 3 && ($donnee = $reponse->fetch()); ++$i){
                echo '<div style="margin-bottom:40px;" class="fd_clickToMe fd_elt col-lg-4 col-md-4 col-sm-6 col-xs-6">';
                echo '<img src="'.$donnee['urlImg'].'">';//le lien ajouter
                echo '<label style="display:none;">'.$donnee['bonde'].'</label>';
                echo '<a class="fd_nomFilm" href="'.$donnee['filmUrl'].'"';
                echo 'title="'.$donnee['nom'].'">';
                echo $donnee['nom'];
                echo '</a>';
                echo "</div>";
            }
        ?>       
    </div>

        <div class="fd_filmDivTabe row col-12">
        <?
            for($i = 0; $i < 3 && ($donnee = $reponse->fetch()); ++$i){
                if($i == 0){
                    echo '<div class="fd_clickToMe fd_autre col-lg-8 col-md-8 col-sm-12 col-xs-12">';
                }
                else{
                    echo'<div class="fd_clickToMe fd_elt col-lg-4 col-md-4 col-sm-6 col-xs-6">';
                }
                echo '<img src="';
                echo $donnee['urlImg'];
                echo '">';
                echo '<label style="display:none;">'.$donnee['bonde'].'</label>';
                echo '<a class="fd_nomFilm" href="';
                echo $donnee['filmUrl'];
                echo '" title="';
                echo $donnee['nom'];
                echo '">';
                echo $donnee['nom'];
                echo "</a>";
                echo '</div>';
            }
        ?>
    </div>    

    <div class="row"> 
        <!-- php -->
        <?
            for($i = 0; $i < 12 && ($donnee = $reponse->fetch()); ++$i){
                echo '<div style="margin-bottom:40px;" class="fd_clickToMe fd_elt col-lg-4 col-md-4 col-sm-6 col-xs-6">';
                echo '<img src="'.$donnee['urlImg'].'">';//le lien ajouter
                echo '<label style="display:none;">'.$donnee['bonde'].'</label>';
                echo '<a class="fd_nomFilm" href="'.$donnee['filmUrl'].'"';
                echo 'title="'.$donnee['nom'].'">';
                echo $donnee['nom'];
                echo '</a>';
                echo "</div>";
            }
            $reponse->closeCursor();
        ?>       
    </div> 
</div>