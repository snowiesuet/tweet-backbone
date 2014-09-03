exports.Model = Backbone.Model.extend({
	addOne: function(value) {
		this.set(value, this.get(value) + 1);
		// return attributes.value + 1;
	},
	subOne: function(value) {
		this.set(value, this.get(value) - 1);
	},
	defaults:{
		"text": "Test text",
		"id": 600828399837794304,
		"user": {
		"name": "Grumpy Cat",
		"screen_name": "RealGrumpyCat",
		"location": "Arizona",
		"description": "The Official Twitter for Grumpy Cat. The World's grumpiest cat! #NO",
		"url": "http:\/\/t.co\/khV3bNozHB",
		"entities": {
			"url": {
				"urls": [{
					"url": "http:\/\/t.co\/khV3bNozHB",
					"expanded_url": "http:\/\/www.grumpycats.com",
					"display_url": "grumpycats.com",
					"indices": [0, 22]
				}]
			},
			"description": {
				"urls": []
			}
		},
		"profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/488794124590395392\/rsBvWfUr_normal.jpeg",
		"followers_count": 232077,
		"friends_count": 29856
	}
}
});

exports.Collection = Backbone.Collection.extend({
  model : exports.Model,
  comparator: function(m1, m2){
  	return new Date(m2.get('created_at')).getTime() - new Date(m1.get('created_at')).getTime();
  }
});