from flask import Flask, request, jsonify, send_file
# import latest package
from flask_cors import CORS
import numpy as np
import librosa as lr
import warnings
import os
import wave
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np
from glob import glob
import matplotlib.pyplot as plt
#import imageio
import warnings
from IPython.display import Audio

app = Flask(__name__)
CORS(app)

sample_rate = 8000
image_width = 500
image_height = 128

train = 'train'
test = 'test'

eng = 'english'
ger = 'german'
swe = 'swedish'

languages = [eng, ger, swe]

def load_audio_file(audio_file_path):
    warnings.simplefilter('ignore', UserWarning) 

    try:
        
        audio_segment, _ = lr.load(audio_file_path, sr=sample_rate)
        print('Loading audio file: ' + audio_file_path)
        return audio_segment
    except Exception as e:
        print(e)
        return None

    warnings.simplefilter('default', UserWarning)

def fix_audio_segment_to_10_seconds(audio_segment):
    target_len = 10 * sample_rate
    audio_segment = np.concatenate([audio_segment]*3, axis=0)
    audio_segment = audio_segment[0:target_len]
    
    return audio_segment

def spectrogram(audio_segment):
    # Compute mel-scaled spectrogram image
    hl = audio_segment.shape[0] // image_width
    spec = lr.feature.melspectrogram(audio_segment, n_mels=image_height, hop_length=int(hl))

    # Logarithmic amplitudes
    image = lr.core.power_to_db(spec)

    # Convert to numpy matrix
    image_np = np.asmatrix(image)

    # Normalize and scale
    image_np_scaled_temp = (image_np - np.min(image_np))
    
    image_np_scaled = image_np_scaled_temp / np.max(image_np_scaled_temp)

    return image_np_scaled[:, 0:image_width]

# member route
@app.route("/members")
def members():
    try:
        return {"members": ["member1", "member2"]}
    except Exception as e:
        return {"error": str(e)}


# receive an audio file from client and then send back an image file
@app.route("/evaluate", methods=["POST"])
def audio():
    try:
        

        files = request.files
        file = files.get('audio_file')
        print(file)
        print(type(file))
        # save the audio file
        file.save('audio.wav')

        # load the audio file using librosa
        audio_segment = load_audio_file('audio.wav')
        
        audio_fixed = fix_audio_segment_to_10_seconds(audio_segment)
        print("Fixed to 10 seconds")
        spectro = spectrogram(audio_fixed)
        print("loaded spectrogram")

        img = np.reshape(spectro, (1, image_height, image_width, 1))

        img = np.array(img) / 255.0
        img = np.expand_dims(img, axis=2)

        img = tf.keras.preprocessing.image.img_to_array(img)
        img = tf.expand_dims(img, 0)

        model = tf.keras.models.load_model('model.h5')

        prediction = model.predict(img)
        
    
        
        # send image file from the image folder back to client
        return {"Prediction": [languages[np.argmax(prediction)]]}
    except Exception as e:
        return {"error": str(e)}


if __name__ == '__main__':
    app.run(debug=True)