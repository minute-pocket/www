jQuery(function ($) {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    state = getParameterByName('status') || 'intro';
    $('.responses>.alert__' + state).slideDown(500);

    if (state === 'authorized') {
        if (getParameterByName('error')) {
            $('.responses>.alert__authorized form .error').show();
        }
    }
})
