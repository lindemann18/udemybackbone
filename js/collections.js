var Song  = Backbone.Model.extend({});
// Método 1 para declarar
var Songs = Backbone.Collection.extend({
	model:Song
});

var Person = Backbone.Model.extend({});
var People = Backbone.Collection.extend({
	model:Person,
	url:"persons.json"
});
var people = new People();
people.fetch();


// Método 2
var songs = new Songs([
	new Song({title:"song 1"}),
	new Song({title:"song 2"}),
	new Song({title:"song 3"})
]);

songs.add(new Song({title:"song 4",genre:"jazz",downloads:110}),{at:0});


// búsqueda en colecciones
// there's a method called findWhere but only return the first instance.
var jazzSongs = songs.where({genre:"jazz"});


// Using filters
var filtered = songs.where({genre:"jazz",title:"song 4"});


var topDownloads = songs.filter(function(song){
	return song.get("downloads")>100;
});

// Project of collections
var Vehicle  = Backbone.Model.extend({});
var Vehicles = Backbone.Collection.extend({
	model:Vehicle
}); 
var vehicles = new Vehicles();
vehicles.add({registrationNumber:"XLI887",color:"blue"});
vehicles.add({registrationNumber:"XLI123",color:"blue"});
vehicles.add({registrationNumber:"XLI456",color:"gray"});

// Find all  the blue cars
var blueCars = vehicles.where({color:"blue"});
//console.log(blueCars);

//Find the car with the registration number XLI887 and log it in the console. 
var regCar = vehicles.findWhere({registrationNumber:"XLI887"});
//console.log(regCar);

// Remove this car from the collection
vehicles.remove(regCar);
//console.log(vehicles);
//console.log(vehicles.toJSON());
