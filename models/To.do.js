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
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const toDo = model("toDo", userSchema);

module.exports = toDo;
