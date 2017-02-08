from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'actAFool'

@app.route('/')
def index():
    if "random" in session:
        session['random'] = session['random']
    else:
        session['random'] = random.randrange(0, 101)
        session['display'] = 'none'
        session['resetDisplay'] = 'none'
    return render_template('index.html')

@app.route('/compare', methods=['POST'])
def compare():
    session['guess'] = request.form['guess']
    if str(session['random']) == str(session['guess']):
        session['display'] = 'block'
        session['color'] = 'green'
        session['response'] = 'YOU GOT IT RIGHT!'
        session['resetDisplay'] = 'block'
        session.pop('count', None)
    elif str(session['random']) > str(session['guess']):
        session['display'] = 'block'
        session['color'] = 'red'
        session['response'] = 'To Low!'
    elif str(session['random']) < str(session['guess']):
        session['display'] = 'block'
        session['color'] = 'red'
        session['response'] = 'To High!'
    return redirect('/')

@app.route('/reset', methods=['Post'])
def reset():
    session.clear()

    return redirect('/')


@app.route('/clear')
def clear():
    session.clear()

    return redirect('/')


app.run(debug=True)
