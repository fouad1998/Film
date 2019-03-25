<div class="container-fluid" id="fd_searchPlace">
    <div class="container" style="display:flex;algin-items:center;max-height:60px;">
        <input style="font-size:30px;background:none;border:none;border-bottom:2px solid #1e9a9b;" type="text" placeholder="Rechercher... " class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1"/>
        <a id="fd_fermerBarreOption" class="col-lg-1 col-md-1 col-sm-1 col-xs-2 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
            <img src="../img/fermerExp1.png" alt="fermer">
        </a>
    </div>
    <div class="container">
        <h3 style="color:#1e9a9b;font-size:20px;" class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
            Appuyer sur entrée pour lance la rechercher
        </h3>
    </div>
    <div class="container">
        <h5 style="color:#1e9a9b;font-size:10px;" class="pull-right">
            <input type="checkbox" id="fd_filter"/><label for="fd_filter">Activer filtrage des rechercher</label>
        </h5>
    </div>
    <div id="fd_sousMenu" class="container"><!-- le sous menu qui sera afficher pour filtre les rechercher -->
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <h3 class="fd_titreOptionSousMenu">Type de film</h3>
            <select name="fd_choiceOfGerneMovie" class="fd_optionSousMenu">
                <option value="action" selected>ACTION</option>
                <option value="thriller">THRILLER</option>
                <option value="drame">DRAME</option>
                <option value="comidie">COMIDIE</option>
                <option value="policier">POLICIER</option>
                <option value="fiction">FICTION</option>
                <option value="horreur">HORREUR</option>
                <option value="guerre">GUERRE</option>
                <option value="aventure">AVENTURE</option>
                <option value="romance">ROMANCE</option>
            </select>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <h3 class="fd_titreOptionSousMenu">
                Qualité de film
            </h3>
            <select name="fd_choiceOfQualite" class="fd_optionSousMenu">
                <option value="FHD">FULL HD</option>
                <option value="HD" selected>HD</option>
                <option value="BLR">BLUERAY</option>
            </select>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-3">
            <h3 class="fd_titreOptionSousMenu">
                L'année de sortie de film
            </h3>
            <select name="fd_choiceOfYear" class="fd_optionSousMenu">
                <option value="2019" selected>2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
            </select>	
        </div>
    </div>
</div>