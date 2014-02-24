define([ 'app', 'underscore', 'backbone' ],
    function ( app, _, Backbone ) {
        var Loop = Backbone.View.extend({
            id: "loop",
            template: "loop",
            events: {

            },
            initialize: function () {
                $(this.el).hide();
            },
            afterRender: function () {
                $(this.el).fadeIn('slow');
            }
        });
        return Loop;
    });
