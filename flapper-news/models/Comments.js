var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	author: String,
	body: String,
	upvotes: {type: Number, default: 0},
	post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
	displayName: String
});

CommentSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};

mongoose.model('Comment', CommentSchema);