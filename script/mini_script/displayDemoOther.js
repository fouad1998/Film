var me;
$('body').ready(() => {
    let allElt = $('.fd_clickToMe');
    allElt.on('click', (e) => {
        $('#displayDemo').css("display", "block");
        me = e.target;
        me = me.parentElement;
        let src = me.getElementsByTagName('label')[0].innerText;
        let href = me.getElementsByTagName('a')[0].href;
        $('#iframe').attr('src', src);
        $('#titreBonde').text(me.getElementsByTagName('a')[0].innerText);
        $('#seeMovie').attr('href', href);
    });


    $('#quitter').on('click', () => {
        $('#displayDemo').css("display", "none");
    })
});