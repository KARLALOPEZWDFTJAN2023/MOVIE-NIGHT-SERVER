const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const todoSchema = new Schema(
  {
    title: {
      type: String,
    
    },
    director: {
      type: String,
    },
    description: {
      type: String,
    },
  },
)
const toDo = model("toDo", userSchema);

module.exports = toDo;
