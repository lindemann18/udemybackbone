var SongView = Backbone.View.extend({
	tagName:"span",
	className:"song",
	id:"default",
	attributes:{
		"data-genre":"Jazz"
	},
	render:function(){
		this.$el.html("hello world");
		return this;
	}
});

$(document).ready(function(){
	var songview = new SongView(/*{el:"#container"}*/{id:"first"});
	//songview.render();

	$("#container").html(songview.render().$el);
});
