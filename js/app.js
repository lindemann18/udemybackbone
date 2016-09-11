/*var Vehicle = Backbone.Model.extend({
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
});*/

var Song = Backbone.Model.extend({
	defaults:{
		listeners:0
	}
});

var SongView = Backbone.View.extend({
	initialize:function(){
		this.model.on("change",this.onModelChange,this);
		this.model.on("change",this.render,this);
	},
	onModelChange:function(){
		this.$el.addClass("someClass");
	},
	render:function(){
		this.$el.html(this.model.get("title")+" listeners: "+this.model.get("listeners"));
		return this
	}
});

var song = new Song({title:"yellow lemon tree"});
var songView = new SongView({el:"#onesong",model:song});
songView.render();

