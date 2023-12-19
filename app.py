
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('tasklist.html')


@app.route('/login.html', methods=['GET', 'POST'])
def login():
    return render_template('login.html')


@app.route('/register.html', methods=['GET, POST'])
def register():
    return render_template('register.html')


@app.route('/diary.html')
def diary():
    return render_template('diary.html')



@app.route('/calendar.html')
def calendar():
    return render_template('calendar.html')


@app.route('/base.html')
def base():
    return render_template('base.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
    app.run(debug=True)