define(['ember','models'],function(Ember, Book){

	BooksRoute = Ember.Route.extend({
		model:function(){
			return Book.find();
		}
	});
	return BooksRoute;

});