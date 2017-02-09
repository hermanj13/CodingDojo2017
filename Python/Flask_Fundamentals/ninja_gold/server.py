from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'actAFool'

@app.route('/')
def index():
    if "total_gold" not in session:
        session['total_gold'] = 0
    if "activities" not in session:
        session['activities'] = ['']
    if session['total_gold'] < 0:
        return redirect('/lost')
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process_money():
    if (request.form['action'] == 'farm'):
        additive = 0
        additive = random.randrange(10,20)
        session['total_gold'] += additive
        activity_printer = "Earned " + str(additive) + " gold from the farm!"
        session['activities'].append(activity_printer)
    if (request.form['action'] == 'cave'):
        additive = 0
        additive = random.randrange(5,10)
        session['total_gold'] += additive
        activity_printer = "Earned " + str(additive) + " gold from the cave!"
        session['activities'].append(activity_printer)
    if (request.form['action'] == 'house'):
        additive = 0
        additive = random.randrange(2,5)
        session['total_gold'] += additive
        activity_printer = "Earned " + str(additive) + " gold from the house!"
        session['activities'].append(activity_printer)
    if (request.form['action'] == 'casino'):
        additive = 0
        additive = random.randrange(-50,50)
        session['total_gold'] += additive
        if additive < 0:
            activity_printer = "Lost " + str(additive) + " gold in the casino!"
            session['activities'].append(activity_printer)
        else:
            activity_printer = "Earned " + str(additive) + " gold in the casino!"
            session['activities'].append(activity_printer)
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

@app.route('/lost')
def lost():
    return render_template("lost.html")


app.run(debug=True)
