<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ADMIN</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../bootstrap/dist/css/bootstrap.css">
</head>
<body>
    <?
        session_start();
        $accesse = false;

        if(isset($_POST['password']) and isset($_POST['login']) ){
            if($_POST['login'] == 'fouad' and $_POST['password'] == 'hfouad'){
                $accesse = true;
            }
            else{
                echo "<div class='alert-danger'>Erreur!! mot de pass ou login oncorrecte</div>";
            }
        }

        else if( isset($_SESSION['login']) and isset($_SESSION['password']) ){
            if($_SESSION['login'] == 'fouad' and $_SESSION['password'] == "hfouad"){
                $accesse = true;
            }          
        }

        else {
            echo "<div class='alert-danger' >Connecté vous tous d'abord</div>";
            include "entreAsAdmin.html";
        }

        if($accesse){
    ?>
    <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 row nav navbar-default jumbotron">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">DASHBOARD</div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">ADD USER</div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">ADD ARTICLE</div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">ADD MOVIES</div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">SETTINGS</div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div>
                        <h1 class="col-lg-8 col-md-8 col-ms-8 col-xs-8">Vue d'ensemble</h1>
                    </div>
                </div>                
            </div>
    </div>    
    <?        
        }
    ?>
</body>
</html>