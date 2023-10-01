import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Portfolio', // Ссылка на модель портфолио
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userName: {
      type: String,
    },
    userAvatar: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model('Comment', commentSchema);
