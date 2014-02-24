define([ 'app','backbone', 'views/loop', 'views/archives'],
    function (app, Backbone, Loop, Archive) {
		
        var Router = Backbone.Router.extend({
            routes:{
                "":"defaultRoute",
                "blog/":"defaultRoute",
                "archives":"show_archive",
                '*notFound':"not_found"
            },
            defaultRoute:function () {
                var loop_view = new Loop({});
                app.renderView(loop_view);
            },
            show_archive:function()
            {
                var archives = new Archive({});
                app.renderView(archives);
            },
            not_found:function () {
                console.error("Route \"" + Backbone.history.fragment + "\" not found");
            }
        });

        return Router;
    }
);
