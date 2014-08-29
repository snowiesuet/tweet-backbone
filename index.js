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