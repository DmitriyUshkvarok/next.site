import mongoose, { model, models } from 'mongoose';

const { Schema } = mongoose;

const aboutWorksSchema = new Schema(
  {
    enterprise: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    position: {
      type: [String],
      default: [],
    },
    image: {
      type: [String],
      // required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Works = models.Work || model('Work', aboutWorksSchema);

export default Works;
