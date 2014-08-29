var Handlebars = require("hbsfy/runtime");

var profileTemplate = window.template = require('../../hbs/profile-template.hbs');

Handlebars.registerHelper('regSize', function(normalSize) {
	return normalSize.replace('_normal', '');
});


module.exports = Backbone.View.extend({
	 initialize: function() {
        this.render();
    },
	render: function() {
		this.$el.html(profileTemplate(this.collection.models[0].toJSON()));
	}
});