const mongoose = require("mongoose");
const slugify = require("slugify");

const { Schema } = mongoose;

module.exports = questionSchema = new Schema({
  id: {
    type: Number,
    default: 0,
    required: [true, "ID is mandatory"],
  },
  question_para: {
    type: String,
  },
  option_field: {
    type: Boolean,
  },
  question_text: {
    type: String,
    required: [true, "Question text is mandatory"],
  },
  option1: {
    type: Schema.Types.Mixed,
    // required: [true, "Option text is mandatory"],
  },
  option2: {
    type: Schema.Types.Mixed,
    // required: [true, "Option text is mandatory"],
  },
  option3: {
    type: Schema.Types.Mixed,
    // required: [true, "Option text is mandatory"],
  },
  option4: {
    type: Schema.Types.Mixed,
    // required: [true, "Option text is mandatory"],
  },
  correct_option: {
    type: Schema.Types.Mixed,
    required: [true, "Correct option is mandatory"],
  },
  solution_text: Schema.Types.Mixed,
});
