from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'actAFool'

def sumSessionCounter():
    try:
        session(['counter']) += 1
    except KeyError:
        session['counter'] = 1


@app.route('/')
def index():
    if "count" in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    # sumSessionCounter
    return render_template('index.html')

@app.route('/add2', methods=['POST'])
def add_two():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset', methods=['post'])
def reset():
    # session.clear()
    # session['counter'] = 0
    session.pop('count', None)
    return redirect('/')

app.run(debug=True)
