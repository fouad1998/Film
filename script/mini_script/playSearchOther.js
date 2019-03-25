function fd_playSearch(whichDirection) {
    let who = $('#fd_searchPlace');
    if (whichDirection == 'top') {
        who.css('top', '-190px');
    } else if (whichDirection == 'bottom') {
        who.css('top', '-7px');
    }
}

$('body').ready(() => {
    var fd_fermerBarreOption = document.getElementById("fd_fermerBarreOption");
    var fd_fermerButtonBarreOptionImg = document.getElementById("fd_fermerBarreOption").getElementsByTagName("img")[0];
    let fd_tmpSearch = $('#fd_causeSearch');
    let filterStatus = $('#fd_filter');
    let filtre = $('#fd_sousMenu');
    fd_tmpSearch.on('click', () => {
        fd_playSearch('bottom');
        $(this).off('click');
    });

    //couté de menu
    fd_fermerBarreOption.onmouseover = () => {
        fd_fermerButtonBarreOptionImg.src = '../img/fermerExp2.png';
    }

    fd_fermerBarreOption.onmouseout = () => {
        fd_fermerButtonBarreOptionImg.src = "../img/fermerExp1.png";
    }

    fd_fermerBarreOption.onclick = () => {
        if (filterStatus[0].checked) {
            filtre.hide(100);
            $('#fd_searchPlace').animate({ 'height': '-=100px' }, 100);
            filterStatus[0].checked = false;
            $('label[for="fd_filter"]').text("Activer le filtre de rechercher");
            setTimeout(() => {
                fd_playSearch('top');
                fd_tmpSearch.on('click', () => {
                    fd_playSearch('bottom');
                    $(this).off('click');
                }, 400);
            })
        } else {
            fd_playSearch('top');
            fd_tmpSearch.on('click', () => {
                fd_playSearch('bottom');
                $(this).off('click');
            });
        }
    };
});