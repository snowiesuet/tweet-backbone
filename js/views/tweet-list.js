var TweetItem = require('./tweet-item');

module.exports = Backbone.View.extend({
	initialize: function() {
        this.listenTo(this.collection, 'add refresh', this.render);
    },

	render: function() {
		var output = [];
		var _this = this;
		_this.$el.empty();
		//var sorted = this.collection.sortBy('created_at');
		this.collection.forEach(function(model) {
			_this.$el.append('<div class="tweet-item"></div>');
			var el = _this.$el.find('.tweet-item:last');
			var tweetItem = new TweetItem({
				model: model,
				el: $(el)
			}).render();
			//output.push(tweetItem);
		});
		//console.log('abc2');
		//this.$el.html(output);
	}
});