$(document).ready(function() {
    $('.ptSettingRadio').click(function() {
        $('.ptSettingRadio').removeClass('ptActiveRadio');
        $(this).addClass('ptActiveRadio');
    });
});