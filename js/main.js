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

require(['ember','routers','models','routes/BooksRoute'],function(Ember, Router, Book, BooksRoute){

	App = Ember.Application.create();

	App.Router = Router;

	App.Store = DS.Store.extend({
		revision : 11,
		adapter  : 'DS.FixtureAdapter'
	});

	App.Book = Book;

	App.BooksRoute = Ember.Route.extend({
		model:function(){
			return App.Book.find();
		}
	});

	App.BookRoute = Ember.Route.extend({
		model:function(params){
			return App.Book.find(params.book_id);
		}
	});
});