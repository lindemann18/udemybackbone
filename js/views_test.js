var VehicleView = Backbone.View.extend({
	tagName:"li",
	className:"vehicle",
	attributes:{
		"data-color":"black"
	},
	initialize:function(){

	},
	render:function(){
		var template = _.template($("#vehicleTemplate").html());
		var html     = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	},
	events:{
		"click .delete":"delete"
	},
	delete:function(vehicle){
		this.$el.remove(vehicle.$el);
	}
});

var Vehicle = Backbone.Model.extend({
	defaults:{
		registration_number:0
	}
});

var Vehicles = Backbone.Collection.extend({
	model:Vehicle
});

var VehiclesViews = Backbone.View.extend({
	render:function(){
		var self = this;
		this.model.each(function(vehicle){
			var vehicleview = new VehicleView({model:vehicle})
			self.$el.append(vehicleview.render().$el); 
		});
	}
});

var Vehicles = new Vehicles([
	{registration_number: "RN234234"},
	{registration_number: "RN786787"},
	{registration_number: "RN345645"}
]);

var vehicleviews = new VehiclesViews({el:"#songContainer",model:Vehicles});
vehicleviews.render();