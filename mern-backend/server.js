import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js"; // 1. Import new routes
import axios from "axios";
import {protectRoute} from "./middleware/protectRoute.js"

dotenv.config();
connectDb();

const app = express();

// --- Middleware ---
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// --- Routes ---
app.use("/api/auth", authRoutes); // 2. Use the new prediction routes

app.post('/api/predict', protectRoute, async(req, res) => {
    console.log('Received a request on /api/predict');

    if(!process.env.PYTHON_API_URL){
        return res.status(500).json({error: 'PYTHON_API_URL is not defined in .env'})
    }

    try{
        const {image} = req.body;
        if(!image){
            return res.status(400).json({error: 'No image data found in the request.'})
        }

        const pythonApiResponse = await axios.post(process.env.PYTHON_API_URL, {
            image_file: image,
        });

        console.log('Successfully received response from Python API.');

        // Send the prediction result back to the React frontend
        res.status(200).json(pythonApiResponse.data);
    } catch(error){
        console.error('Error forwarding request to Python API:', error.message);
        res.status(500).json({ 
        error: 'Failed to get a prediction from the Python API.',
        details: error.message 
    });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Node.js proxy server listening on port ${PORT}`);
});