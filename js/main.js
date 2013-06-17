require.config({

	paths:{
		jquery          :       'libs/vendor/jquery-1.8.3.min',
		handlebars		:       'libs/vendor/handlebars-1.0.0.rc.2',
		ember           :       'libs/vendor/ember',
		DS		        :       'libs/vendor/ember-data',
		routers         :       'Routers/router',
		routes          :       'Routes',
		controllers     :       'Controllers',
		models          :       'Models/model'
	},

	shim:{
		ember:{
			deps:['handlebars','jquery'],
			exports:'Ember'
		},
		DS:{
			deps:['ember'],
			exports:'DS'
		}
	}
});

require(['ember','routers','routes/BooksRoute','routes/BookRoute','controllers/BooksController','controllers/BookController'],
	function(Ember, Router, BooksRoute, BookRoute, BooksController, BookController){

	App = Ember.Application.create();
	App.Router = Router;
	App.Store = DS.Store.extend({
		revision : 11,
		adapter  : 'DS.FixtureAdapter'
	});
	
	App.BooksController = BooksController;
	App.BookController = BookController;
	
	App.BooksRoute = BooksRoute;
	App.BookRoute = BookRoute;
});