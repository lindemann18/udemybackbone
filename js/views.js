var SongView = Backbone.View.extend({
	tagName:"li",
	className:"song",
	id:"default",
	attributes:{
		"data-genre":"Jazz"
	},

	initialize:function(){
		this.model.on("change",this.render,this);
	},
	render:function(){
		this.$el.html(this.model.get("title")+"<button id='play'>Listen</button><button class='bookmark'>Bookmark</button>"+" Listeners: "+this.model.get("listeners"));
		return this;
	},
	events:{
		"click #play":"onClick",
		"click .bookmark":"onClickBookmark"
	},
	onClick:function(){
		alert("Listening: "+this.model.get("title"));
	},
	onClickBookmark:function(e){
		e.stopPropagation();
		alert("Artist: "+this.model.get("artist"));
	}
});

var Song = Backbone.Model.extend({
	defaults:{
		listeners:0
	}
});

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongsView = Backbone.View.extend({
	render:function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({model:song});
			self.$el.append(songView.render().$el); 
		});
	}
});

$(document).ready(function(){

	var song     = new Song({title:"yellow lemon tree"});
	var songs    = new Songs([
		new Song({title: "paint it black",artist:"Rolling Stones"}),
		new Song({title: "Mountain at my gates",artist:"Foals"}),
		new Song({title: "Late night",artist:"Foals"})
	]); 

	var songsView = new SongsView({el:"#songContainer",model:songs});
	var songView  =  new SongView({el:"#onesong",model:song});
	songsView.render();
	songView.render();
});
