var Song 	 = Backbone.Model.extend({});
var SongView = Backbone.View.extend({

	render:function(){
		var template = _.template($("#songTemplate").html());
		var html     = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	},
	events:{
		"click":"onClick"
	},
	onClick:function(){
		alert("holis");
	}
});
var song = new Song({title:"Late Night",plays:1001});
var songView = new SongView({el:"#onesong",model:song})
songView.render();