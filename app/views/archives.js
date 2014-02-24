define([ 'app', 'underscore', 'backbone' ],
    function ( app, _, Backbone ) {
        var Archives = Backbone.View.extend({
            id: "loop",
            template: "archives",
            events: {

            },
            initialize: function () {
                $(this.el).hide();
            },
            afterRender: function () {
                $(this.el).fadeIn('slow');
            }
        });
        return Archives;
    });
