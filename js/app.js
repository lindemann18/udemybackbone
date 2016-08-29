var Vehicle = Backbone.Model.extend({
	urlRoot:"api/songs.json",
	validate:function(attrs){
		if(!attrs.registrationNumber)
		{
			return "Registration Number is required";
		}
	},
	initialize:function(){

	},
	start:function(){
		console.log("vehicle started");
	}
});

	

$(document).ready(function(){
	var vehicle = new Vehicle({registrationNumber:1});

	var Car     =  Vehicle.extend({
		start:function(){
			console.log("registration number: "+this.get("registrationNumber"));
		}
	});

	var car = new Car({registrationNumber:"XLI887",color:"blue"});
	//car.start();
	//console.log(car.isValid());
	//console.log(vehicle.get("registrationNumber"));
	//console.log(vehicle.isValid());
	//console.log(vehicle.validationError);
});