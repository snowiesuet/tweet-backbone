var Handlebars = require("hbsfy/runtime");

var profileNav = window.template = require('../../hbs/profile-nav.hbs');


//handlebars way to retrieve the length
Handlebars.registerHelper('tweetLength', function(collection) {
	return collection.length;
});

module.exports = Backbone.View.extend({
	initialize: function() {
        this.listenTo(this.collection, 'change', this.render);
    },
	render: function() {
		this.$el.html(profileNav({tweetCol: this.collection.toJSON()}));
		//console.log(this.collection.first().toJSON().user.followers_count);
		//this.$el.html(profileNav(this.collection.models[0].toJSON()));
	}
});