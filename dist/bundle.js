(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/sleung/projects/snowie-training/bb-modelv/hbs/profile-nav.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<ul class=\"profileNav-list\">\n\n	<li class=\"profileNav-item\">\n		<span class=\"profileNav-lb\">Tweets</span>\n		<span class=\"profileNav-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.tweetCol : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n	</li>\n\n	<li class=\"profileNav-item\">\n		<span class=\"profileNav-lb\">Followers</span>\n\n		<span class=\"profileNav-value\">\n			"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.tweetCol : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.user : stack1)) != null ? stack1.followers_count : stack1), depth0))
    + "\n		</span>\n	</li>\n	<li class=\"profileNav-item\">\n		<span class=\"profileNav-lb\">Following</span>\n		<span class=\"profileNav-value\">	"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.tweetCol : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.user : stack1)) != null ? stack1.friends_count : stack1), depth0))
    + "</span>\n	</li>\n</ul>";
},"useData":true});

},{"hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/hbs/profile-template.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<a href=\""
    + escapeExpression(((helper = (helper = helpers.expanded_url || (depth0 != null ? depth0.expanded_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"expanded_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.display_url || (depth0 != null ? depth0.display_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"display_url","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"profile-avatar\">\n	<img class=\"profile-img\" src=\""
    + escapeExpression(((helpers.regSize || (depth0 && depth0.regSize) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_image_url : stack1), {"name":"regSize","hash":{},"data":data})))
    + "\"/>\n	<div class=\"profile-name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n	<div class=\"profile-screen-name\">@"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</div>\n	<div class=\"profile-desc\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\n	<p class=\"profile-location\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "</p>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.entities : stack1)) != null ? stack1.url : stack1)) != null ? stack1.urls : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<div class=\"tweetBox\">\n	<input type=\"textarea\" id=\"tweetMsg\" maxlength=\"140\" placeholder=\"Compose new tweet...\" class=\"inputForm\"></input>\n	<button class=\"tweetBtn\" id=\"tweeteh\">Tweet!</button>\n</div>";
},"useData":true});

},{"hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/hbs/tweet-template.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "		<i class=\"sprite retweeted\"></i><span class=\"retweet-name\"><i>Retweeted by: \n		<a class=\"retweet-name\" href=\"http://www.twitter.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></span></i>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.retweeted_status : depth0), {"name":"with","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.extended_entities : depth0)) != null ? stack1.media : stack1), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function";
  return "		  	<div>\n		  		<img class=\"thumb-nail\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_image_url : stack1), depth0))
    + "\"></img>\n		  		<a class=\"user-url\" href=\"http://www.twitter.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n		  		<span class=\"screen-name\">@"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + " - "
    + escapeExpression(((helpers.parseDate || (depth0 && depth0.parseDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"parseDate","hash":{},"data":data})))
    + "</span>\n		  	</div>\n		  	<div>"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		  	<div class=\"tweet-img\">\n		  		<img class=\"tweet-img\" src=\""
    + escapeExpression(((helper = (helper = helpers.media_url || (depth0 != null ? depth0.media_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"media_url","hash":{},"data":data}) : helper)))
    + "\"></img>\n		  	</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "		<img class=\"thumb-nail\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_image_url : stack1), depth0))
    + "\"></img>\n		<a class=\"user-url\"  href=\"http://www.twitter.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n		<span class=\"screen-name\"> @"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + " - "
    + escapeExpression(((helpers.parseDate || (depth0 && depth0.parseDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"parseDate","hash":{},"data":data})))
    + "</span>\n		<div>"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</div>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.extended_entities : depth0)) != null ? stack1.media : stack1), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<div class=\"tweet-img\">\n				<img src=\""
    + escapeExpression(((helper = (helper = helpers.media_url || (depth0 != null ? depth0.media_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"media_url","hash":{},"data":data}) : helper)))
    + "\"></img>\n			</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<span class=\"sprite unfavorite\"></span>\n		<span class=\"count\">"
    + escapeExpression(((helper = (helper = helpers.favorite_count || (depth0 != null ? depth0.favorite_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"favorite_count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<span class=\"sprite favorite\"></span>\n		<span class=\"count\">"
    + escapeExpression(((helper = (helper = helpers.favorite_count || (depth0 != null ? depth0.favorite_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"favorite_count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<span class=\"sprite retweet\"></span>\n		<span class=\"count\">"
    + escapeExpression(((helper = (helper = helpers.retweet_count || (depth0 != null ? depth0.retweet_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"retweet_count","hash":{},"data":data}) : helper)))
    + "</span>\n\n";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<span class=\"sprite retweeted\"></span>\n		<span class=\"count\">"
    + escapeExpression(((helper = (helper = helpers.retweet_count || (depth0 != null ? depth0.retweet_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"retweet_count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "\n<div class=\"tweet-item-wrap\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.retweeted_status : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.isFavoriteAvailable || (depth0 != null ? depth0.isFavoriteAvailable : depth0)) != null ? helper : helperMissing),(options={"name":"isFavoriteAvailable","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.isFavoriteAvailable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.disabledBtn || (depth0 != null ? depth0.disabledBtn : depth0)) != null ? helper : helperMissing),(options={"name":"disabledBtn","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.disabledBtn) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

},{"hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/index.js":[function(require,module,exports){
var Tweet = require('./js/models/tweet');
var TweetModel = window.TweetModel = Tweet.Model;

var TweetCol = Tweet.Collection;
var tweetCollection = window.tweetCollection = new TweetCol();
tweetCollection.url = 'json/cat.json';
tweetCollection.fetch();


var TweetList = require('./js/views/tweet-list');
var ProfileView = require('./js/views/profile');
var ProfileNav = require('./js/views/profile-nav');



tweetCollection.on('sync', function() {
	window.tweetItem = new TweetList({
		el: '#tweetView',
		collection: tweetCollection,
	}).render();

	window.profileView = new ProfileView({
		el: '#profileView',
		collection: tweetCollection,
	}).render();

	window.profileNav = new ProfileNav({
		el: '#profileCanopy',
		collection: tweetCollection,
	}).render();
});



// $.getJSON("json/cat.json", function(json) {
// 	var catModel = new CatModel(json);
// 	var catCol = new CatCol(catModel);
// 	var catView = new CatView({
// 		model: catModel
// 	}).render();

// 	 console.log(catCol);

// 	//$('myCatView').html(catView.render());
// });
},{"./js/models/tweet":"/Users/sleung/projects/snowie-training/bb-modelv/js/models/tweet.js","./js/views/profile":"/Users/sleung/projects/snowie-training/bb-modelv/js/views/profile.js","./js/views/profile-nav":"/Users/sleung/projects/snowie-training/bb-modelv/js/views/profile-nav.js","./js/views/tweet-list":"/Users/sleung/projects/snowie-training/bb-modelv/js/views/tweet-list.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/js/models/tweet.js":[function(require,module,exports){
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
},{}],"/Users/sleung/projects/snowie-training/bb-modelv/js/views/profile-nav.js":[function(require,module,exports){
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
},{"../../hbs/profile-nav.hbs":"/Users/sleung/projects/snowie-training/bb-modelv/hbs/profile-nav.hbs","hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/js/views/profile.js":[function(require,module,exports){
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
},{"../../hbs/profile-template.hbs":"/Users/sleung/projects/snowie-training/bb-modelv/hbs/profile-template.hbs","hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/js/views/tweet-item.js":[function(require,module,exports){
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
},{"../../hbs/tweet-template.hbs":"/Users/sleung/projects/snowie-training/bb-modelv/hbs/tweet-template.hbs","hbsfy/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/js/views/tweet-list.js":[function(require,module,exports){
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
},{"./tweet-item":"/Users/sleung/projects/snowie-training/bb-modelv/js/views/tweet-item.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars.runtime.js":[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars/base":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/base.js","./handlebars/exception":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/exception.js","./handlebars/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/runtime.js","./handlebars/safe-string":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/safe-string.js","./handlebars/utils":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/base.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "2.0.0-beta.1";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, str) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = str;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));

            if (contextPath) {
              data.contextPath = contextPath + i;
            }
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) {
              data.key = key;
              data.index = i;
              data.first = (i === 0);

              if (contextPath) {
                data.contextPath = contextPath + key;
              }
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(context, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, context);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, obj) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/exception.js":[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/runtime.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
    if (hash) {
      context = Utils.extend({}, context, hash);
    }

    var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

    if (result == null && env.compile) {
      var options = { helpers: helpers, partials: partials, data: data, depths: depths };
      partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
      result = partials[name](context, options);
    }
    if (result != null) {
      if (indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths) {
        programWrapper = program(this, i, fn, data, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, depths) {
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/base.js","./exception":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/safe-string.js":[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/utils.js":[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{"./safe-string":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars/safe-string.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/runtime.js":[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime');

},{"./dist/cjs/handlebars.runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/dist/cjs/handlebars.runtime.js"}],"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/hbsfy/runtime.js":[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":"/Users/sleung/projects/snowie-training/bb-modelv/node_modules/handlebars/runtime.js"}]},{},["/Users/sleung/projects/snowie-training/bb-modelv/index.js"]);
