require.config({
    deps: [
            /*autoload*/
            'main'
    ],
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        jqueryui: '../vendor/jquery-ui/ui/jquery-ui',
        underscore:'../vendor/underscore-amd/underscore',
        backbone: '../vendor/backbone-amd/backbone',
        layoutmanager: '../vendor/layoutmanager-amd/backbone.layoutmanager'
    },
    "shim":{
		'jqueryui': {
			deps: ['jquery']
		}
    }
});
