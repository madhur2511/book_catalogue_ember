define(['ember','text!../Templates/BooksTemplate.html'],function(Ember,BooksTemplate){

	BooksView = Ember.View.extend({
		defaultTemplate : Ember.Handlebars.compile(BooksTemplate)
	});
	return BooksView;
});