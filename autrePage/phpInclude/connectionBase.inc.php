
<?
    try{
        $bdb = new PDO("mysql:host=localhost;dbname=film;charset=utf8", 'root', "");
    }
    catch(Exception $e){
        die('Erreur d\'ouvirteur de base de données '.$e->getMessage());
    }
?>
