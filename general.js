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

    $('#raccoon>div').hide();

    state = getParameterByName('status') || 'intro';
    $('#raccoon>.' + state).fadeIn(250);

    if (state === 'authorized') {
        $('#raccoon>.authorized h3>span').text(getParameterByName('username') || 'John Doe');
        if (getParameterByName('error')) {
            $('#raccoon>.authorized form .error').show();
        }
    }
})
