from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'actAFool'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/results')

@app.route('/results')
def show_results():
    return render_template('results.html')

app.run(debug=True)
