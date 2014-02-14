define([ 'app','backbone' ],
    function (app, Backbone) {
		
        var Router = Backbone.Router.extend({
            routes:{
                "":"defaultRoute",
                '*notFound':"not_found"
            },
            defaultRoute:function () {

            },
            not_found:function () {
                console.error("Route \"" + Backbone.history.fragment + "\" not found");
            }
        });

        return Router;
    }
);
