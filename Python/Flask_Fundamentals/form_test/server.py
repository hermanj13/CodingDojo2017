from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'actAFool'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    session.pop('error', None)
    session['comment'] = request.form['comment']
    if len(session['comment']) > 120:
        session['error'] = "Excuse me... You're comment is just a little to long!"
        session.pop('comment', None)
        return redirect('/')
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    return redirect('/results')

@app.route('/results')
def show_results():
    return render_template('results.html')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
