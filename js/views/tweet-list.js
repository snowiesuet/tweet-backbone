var TweetItem = require('./tweet-item');

module.exports = Backbone.View.extend({
	render: function() {
		var output = [];
		var _this = this;
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