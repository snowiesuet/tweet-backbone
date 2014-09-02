var Handlebars = require("hbsfy/runtime");

var profileTemplate = window.template = require('../../hbs/profile-template.hbs');

Handlebars.registerHelper('regSize', function(normalSize) {
	return normalSize.replace('_normal', '');
});


module.exports = Backbone.View.extend({
	tweetCount: 0,
	initialize: function() {
		this.render();
	},
	events: {
		"click #tweeteh": "tweetehed",
	},
	addTweetCount: function(){
		return --this.tweetCount;
	},
	tweetehed: function(evt) {
		console.log('adding new tweet model');
		_this = this.model;
		var newTweetModel = new TweetModel({
			text: this.$("input#tweetMsg").val(),
			id: this.addTweetCount(),
			created_at: new Date()
		});
		$("input#tweetMsg").val(""),
		this.collection.add(newTweetModel);
		this.collection.trigger('change');
	},
	render: function() {
		this.$el.html(profileTemplate(this.collection.models[0].toJSON()));
	}
});