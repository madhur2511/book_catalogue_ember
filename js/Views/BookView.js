define(['ember','text!../Templates/BookTemplate.html'],function(Ember,BookTemplate){

	BookView = Ember.View.extend({
		defaultTemplate : Ember.Handlebars.compile(BookTemplate)
	});
	return BookView;
});