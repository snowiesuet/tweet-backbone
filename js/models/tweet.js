exports.Model = Backbone.Model.extend({
	addOne: function(value) {
		this.set(value, this.get(value) + 1);
		// return attributes.value + 1;
	},
	subOne: function(value) {
		this.set(value, this.get(value) - 1);
	}
});

exports.Collection = Backbone.Collection.extend({
  model : exports.Model
});