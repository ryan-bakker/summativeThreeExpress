const mongoose = require("mongoose");

var Schema = mongoose.Schema;

// comment properties

var CommentsSchema = new Schema({
  user: String,
  comment: String,
});

const Comments = mongoose.model("Comment", CommentsSchema);

module.exports = Comments;
