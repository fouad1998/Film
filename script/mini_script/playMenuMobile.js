function fd_displayMenuMobile(which) {
    if (which == 'left') {
        $('#fd_menuMobile').css('left', '-100%');
    } else if (which == 'right') {
        $('#fd_menuMobile').css('left', '0');
    }
}

$('body').ready(() => {
    let autoChanger = true;
    $('#fd_buttonMenu').on('click', () => {
        if (autoChanger == true) {
            fd_displayMenuMobile('right');
            autoChanger = false;
        } else {
            fd_displayMenuMobile('left');
            autoChanger = true;
        }
    });

    $(window).on('scroll', () => {
        fd_displayMenuMobile('left');
        autoChanger = true;
    })
})