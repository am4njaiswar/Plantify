import uvicorn
import numpy as np
import tensorflow as tf
from fastapi import FastAPI
from pydantic import BaseModel
from tensorflow.keras.models import load_model
from PIL import Image
import io
import base64

# Define a global variable for the model to load it once
model = None

# Define the class names in the exact order your model was trained on
# Replace this list with your actual class names
CLASS_NAMES = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy', 'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

# Create a FastAPI instance
app = FastAPI()

# Pydantic model for input data validation
class ModelInput(BaseModel):
    image_file: str

# Use the @app.on_event decorator to load the model at startup
@app.on_event("startup")
async def load_model_on_startup():
    """Load the pre-trained Keras model when the server starts."""
    global model
    model = load_model("C:\\Users\\Aman\\Desktop\\Plant Disease Frontend\\PythonApi\\best_plant_model.keras") 
    print("Model loaded successfully!")

@app.post("/predict")
async def predict_with_model(input_data: ModelInput):
    """
    An endpoint for making predictions with the Keras model.
    """
    try:
        # Decode the base64 string to bytes
        image_bytes = base64.b64decode(input_data.image_file)

        # Open the image using Pillow (PIL)
        image = Image.open(io.BytesIO(image_bytes))

        # Resize the image to 224x224 pixels, as expected by your model
        image = image.resize((224, 224))

        # Convert the image to a NumPy array
        image_array = np.array(image)

        # Ensure the array has the correct number of channels (3 for RGB)
        if image_array.shape[-1] != 3:
            # Handle cases where image is grayscale or has an alpha channel
            image = image.convert('RGB')
            image_array = np.array(image)

        # Add a batch dimension, as the model expects (1, 224, 224, 3)
        processed_data = np.expand_dims(image_array, axis=0)

        # Make the prediction
        prediction_list = model.predict(processed_data).tolist()[0]
        
        # Get the index of the highest confidence score
        predicted_index = np.argmax(prediction_list)
        
        # Get the highest confidence score
        confidence = np.max(prediction_list)

        # Get the corresponding class name
        predicted_class_name = CLASS_NAMES[predicted_index]

        # Format the output string
        output_string = f"This image is a '{predicted_class_name}' with {confidence * 100:.2f}% confidence."

        return {
            "prediction": prediction_list,
            "predicted_class_name": predicted_class_name,
            "confidence": confidence,
            "output_string": output_string
        }

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)