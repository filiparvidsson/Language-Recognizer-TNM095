from flask import Flask, request, jsonify

app = Flask(__name__)

# member route
@app.route('/members')
# definition of members which holds the list of members and their age
def members():
    members = [
        {'name': 'John', 'age': 32},
        {'name': 'Jane', 'age': 24},
        {'name': 'Bob', 'age': 45},
        {'name': 'Mary', 'age': 21},
        {'name': 'Steve', 'age': 33},
        {'name': 'Sarah', 'age': 26},
    ]
    return {'members': members}

if __name__ == '__main__':
    app.run(debug=True)
