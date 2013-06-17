define(['ember'],function(Ember){

		var Router = Ember.Router.extend();
		Router.map(function(){
			this.route('books' , {path:'/'});
			this.route('book', {path : ':book_id'});
		});
		return Router;
		
});