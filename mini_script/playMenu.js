var fd_menu = $('#fd_menu');
let fd_decission = true;

window.onscroll = () => {
    if (scrollY >= (720) && fd_decission == true) {
        fd_menu.css('position', 'fixed').css('top', '-80px');
        fd_menu.animate({ 'top': '0px' }, 600);
        fd_decission = false;
    } else if (scrollY < (720) && fd_decission == false) {
        fd_menu.animate({ 'top': '-80px' }, 100);
        setTimeout(() => {
            fd_menu.css('position', 'static');
        }, 180);
        fd_decission = true;
    }
}