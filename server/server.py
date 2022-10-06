from flask import Flask, request, jsonify, send_file
# import latest package
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

# member route
@app.route("/members")
def members():
    try:
        return {"members": ["member1", "member2"]}
    except Exception as e:
        return {"error": str(e)}


# receive an audio file from client and then send back an image file
@app.route("/evaluate", methods=["POST", "GET"])
def audio():

    
    
    try:
        
        # get the audioData from client in the form of a string and make it into an audio file
        audioData = request.form["audioData"]

        print("Received audio file")
        
        

        # send image file from the image folder back to client
        return send_file("image/image.png", mimetype="image/png")
    except Exception as e:
        return {"error": str(e)}


if __name__ == '__main__':
    app.run(debug=True)