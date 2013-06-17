define(['ember','models'],function(Ember, Book){

	BookRoute = Ember.Route.extend({
		model:function(params){
			return Book.find(params.book_id);
		}
	});
	return BookRoute;

});