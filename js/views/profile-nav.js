var Handlebars = require("hbsfy/runtime");

var profileNav = window.template = require('../../hbs/profile-nav.hbs');

module.exports = Backbone.View.extend({
	 initialize: function() {
        this.render();
    },
	render: function() {
		this.$el.html(profileNav(this.collection.models[0].toJSON()));
	}
});