	var Handlebars = require("hbsfy/runtime");
	Handlebars.registerHelper('parseDate', function(currentDate) {
		return (moment(currentDate).fromNow());
	});

	var tweetTemplate = window.template = require('../../hbs/tweet-template.hbs');

	module.exports = Backbone.View.extend({
		favoriteDisplay: 'favorite',
		isFavoriteAvailable: true,
		disabledBtn: true,
		initialize: function(options) {
				this.listenTo(this.model, 'change', this.render);
		},
		events: {
			"click .favorite": "clickedFavorite2",
			"click .unfavorite": "clickedFavorite2",
			"click .retweet": "clickedRetweet"
		},
		clickedFavorite: function(evt) {
			// this.$('#favorite').text('Unfavorite');
			// Same:
			// this.$('#favorite') // $(this.el).find('#favorite')
			// $(evt.target)
			//
			// Should not use this:
			// $('button#favorite')

			if (this.favoriteDisplay === 'Favorite') {
				this.favoriteDisplay = 'Unfavorite';
				this.model.addOne('favorite_count');
			} else {
				this.favoriteDisplay = 'Favorite';
				this.model.subOne('favorite_count');
			}
		},
		clickedFavorite2: function(evt) {
			this.isFavoriteAvailable = !this.isFavoriteAvailable;
			if (!this.isFavoriteAvailable) {
				this.model.addOne('favorite_count');
			} else {
				this.model.subOne('favorite_count');
			}
		},
		clickedRetweet: function(evt) {
			this.disabledBtn = false;
			this.model.addOne('retweet_count');
		},
		render: function() {

			var options = _.extend({}, this.model.toJSON()); // I'm copying
			options.isFavoriteAvailable = this.isFavoriteAvailable;
			options.disabledBtn = this.disabledBtn;

			// var template = Handlebars.compile($('#catTemp').html());
			//this.$el.html(template(this.model.toJSON()) + '<button id="favorite">'+ this.favoriteDisplay + '</button>' + '<button id="retweet">Retweet</button>');
			this.$el.html(tweetTemplate(options));
			//var output = template(this.model.toJSON()) + '<button class="favorite">' + (this.isFavoriteAvailable ? 'Like' : 'Unlike') + '</button>' + '<button ' + this.disabledBtn + ' id="retweet">Retweet</button>';
			//return output;
		}
	});