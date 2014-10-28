require.config({
    paths: {
        iwc: '/bower_components/iwcjs/dist/iwc',
        jquery: '/bower_components/jquery/dist/jquery'
    }
});

require(['iwc', '../dist/iwc-autocomplete', 'jquery'], function (iwc) {
    // ...
});
