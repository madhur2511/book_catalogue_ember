define(['ember','text!../Templates/ApplicationTemplate.html'],function(Ember,ApplicationTemplate){

	ApplicationView = Ember.View.extend({
		defaultTemplate : Ember.Handlebars.compile(ApplicationTemplate)
	});
	return ApplicationView;
});