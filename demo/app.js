require.config({
    paths: {
        iwc: '/bower_components/iwcjs/dist/iwc',
        jquery: '/bower_components/jquery/dist/jquery'
    }
});

require(['iwc', '../dist/iwc-autocomplete'], function (iwc) {
    iwc.load(document.body, function() {
        console.log("Loaded!");
    });
});
