from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'actAFool'

@app.route('/')
def index():
    session['counter'] += 1
    return render_template('index.html')

@app.route('/add2', methods=['POST'])
def add_two():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset', methods=['post'])
def reset():
    session['counter'] = 0
    return redirect('/')

app.run(debug=True)
