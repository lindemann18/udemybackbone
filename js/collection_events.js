var Song  	 = Backbone.Model.extend({});
var Songs    = Backbone.Collection.extend({model:Song });
var SongView = Backbone.View.extend({
	tagName:"li",
	render:function(){
		this.$el.html(this.model.get("title") + "<button class='remove'>Remove</button>");
		this.$el.attr("id",this.model.id);
		return this;
	},
	events:{
		"click":"OnClick",
		"click .remove":"removeSong"
	},
	OnClick:function(){
		console.log(this.model);
	},
	removeSong:function(song){
		this.$el.remove(song.$el);
	}
}) ;

var SongsView = Backbone.View.extend({
	tagName:"ul",
	render:function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({model:song});
			self.$el.append(songView.render().$el);
		});
	},
	initialize:function(){
		this.model.on("add",this.onModelAdd,this);
		this.model.on("remove",this.onRemove,this);
	},
	onModelAdd:function(song){
		var songView = new SongView({model:song});
		this.$el.append(songView.render().$el);
	},
	onRemove:function(song){
		console.log("song removed: "+song.get("title"));
		this.$("li#"+song.id).remove();
	}
});

var songs = new Songs([
	new Song({id:1,title:"Mountain at my gates"}),
	new Song({id:2,title:"Late night"}),
	new Song({id:3,title:"Milk & black spiders"})
]);

var songsView = new SongsView({el:"#songContainer",model:songs});
songsView.render();