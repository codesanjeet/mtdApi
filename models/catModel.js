const mongoose = require("mongoose");
const slugify = require("slugify");
questionSchema = require("./questionModel");

const { Schema } = mongoose;

const catTestSchema = new Schema({
  setId: {
    type: Number,
    default: 0,
    required: [true, "Set id is required"],
  },
  VARC: {
    type: [questionSchema],

    validate: [
      {
        validator: (val) => val.length === 3,
        msg: "There must be at least 24 questions in VARC",
      },
    ],
  },
  DILR: {
    type: [questionSchema],

    validate: [
      {
        validator: (val) => val.length === 5,
        msg: "There must be at least 20 questions in DILR",
      },
    ],
  },
  QUANT: {
    type: [questionSchema],

    validate: [
      {
        validator: (val) => val.length === 22,
        msg: "There must be exactly 22 questions in QUANT",
      },
    ],
  },
});

const CatTestModel = mongoose.model("CatTest", catTestSchema);
module.exports = CatTestModel;
