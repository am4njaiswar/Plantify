import mongoose from 'mongoose';

const predictionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  diseaseName: {
    type: String,
    required: true,
  },
  confidenceScore: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Prediction = mongoose.model('Prediction', predictionSchema);

export default Prediction;