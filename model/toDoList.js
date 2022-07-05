const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB_API = require("../connections");


const listSchema = new Schema(
  {
    name: { type: String, required: true },
    listItem: [
      { itemName: String },
    ],
  },
  { timestamps: true }
);

const OurList = mongoDB_API.toDoListDB.model("List", listSchema);

module.exports = OurList;
