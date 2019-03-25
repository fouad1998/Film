<?
    $reponse = $bdb->query('SELECT * FROM filmTabe ORDER BY views desc LIMIT 30');
    while($donnee = $reponse->fetch()){
        echo '<tr class="col-12">';
        echo '<td style="display:block;" class="col-8 text-left col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">';
        echo '<a  class="col-12" href="' . $donnee['filmUrl'] . '" title="' . $donnee['nom']. '">';
        echo $donnee['nom'];
        echo '</a>';
        echo '</td>';
        echo '</tr>';						
    }
    $reponse->closeCursor();
?>