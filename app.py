
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route('/index.html')
def dashboard():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
