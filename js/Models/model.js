define(['ember','DS'],function(Ember, DS){

	Book = DS.Model.extend({
		name : DS.attr('string'),
		author : DS.attr('string'),
		description : DS.attr('string'),
		category : DS.attr('string'),
		url : DS.attr('string')
	});

	Book.FIXTURES=[
		{id : 'A' ,name : "A",author : "A Bc",description : "abc",category : "abc" ,url:"assets/A.png"},
	  	{id : 'B' ,name : "B",author : "D Ef",description : "def",category : "def" ,url:"assets/B.jpg"},
		{id : 'C' ,name : "C",author : "G Hi",description : "ghi",category : "ghi" ,url:"assets/C.png"},
		{id : 'D' ,name : "D",author : "J Kl",description : "jkl",category : "jkl" ,url:"assets/D.jpg"},
		{id : 'E' ,name : "E",author : "M No",description : "mno",category : "mno" ,url:"assets/E.png"},
		{id : 'F' ,name : "F",author : "P Qr",description : "pqr",category : "pqr" ,url:"assets/F.jpg"}
	];
	return Book;

});