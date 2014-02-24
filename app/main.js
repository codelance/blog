require([ 'app', 'router', 'backbone' ],
    function (app, Router, Backbone) 
    {
		// master router
		app.router = new Router;

		// Trigger the initial route
		Backbone.history.start({ pushState:true, root:app.root });

        // Register no op event handler
        window.noop = function(event){ event.preventDefault();}

        // All navigation that is relative should be passed through
        $(document).on('click', 'a:not([data-bypass])', function (evt) {
            // Get the absolute anchor href.
            var href = $(this).attr('href');
            console.log("Handling link \"" + href + "\" click");
            // If the href exists and is a hash route, run it through Backbone.
            if (href && href.indexOf('#') === 0) {
                // Stop the default event
                evt.preventDefault();
                // `Backbone.history.navigate` is sufficient for all Routers
                Backbone.history.navigate(href, true);
            }
        });
        $(document).on('click', 'a[data-bypass]', function (evt) {
            evt.preventDefault();
            return false; // so your '#' href doesn't get used
        } );
    });
