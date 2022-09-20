from flask import Flask, request, jsonify

app = Flask(__name__)

# member route
@app.route('/members')
# definition of members which holds the list of members and their age
def members():
    return {'members': ["member1", "member2"]}

if __name__ == '__main__':
    app.run(debug=True)
