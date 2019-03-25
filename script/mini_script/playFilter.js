$('body').ready(() => {
    let filterStatus = $('#fd_filter');
    let filter = $('#fd_sousMenu');
    let searchPlace = $('#fd_searchPlace');

    filterStatus.on('change', () => {
        if (filterStatus[0].checked) {
            searchPlace.animate({ 'height': '+=100px' }, 200);
            filter.delay(500).fadeIn(400);
            $('label[for="fd_filter"]').text("Désactiver le filtre de rechercher");
        } else {
            filter.fadeOut(200);
            searchPlace.delay(300).animate({ 'height': "-=100px" }, 200);
            $('label[for="fd_filter"]').text("Activer le filtre de rechercher");
        }
    });
});