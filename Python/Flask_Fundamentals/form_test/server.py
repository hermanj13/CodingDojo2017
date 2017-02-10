from flask import Flask, render_template, request, redirect, session
import re
app = Flask(__name__)
app.secret_key = 'actAFool'

def email_valid(email):
    if not re.match("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$", email):
        return False
    return True

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    session.pop('error', None)
    session['first_name'] = request.form['first_name'].strip()
    if str.isalpha(str(session['first_name'])):
        session['last_name'] = request.form['last_name'].strip()
        if str.isalpha(str(session['last_name'])):
            session['email'] = request.form['email'].strip()
            if email_valid(str(session['email'])):
                session['location'] = request.form['location']
                session['language'] = request.form['language']
                session['comment'] = request.form['comment']
                if len(session['comment']) < 120:
                    return redirect('/results')
                else:
                    session['error'] = "Excuse me... Your comment is just a little to long!"
                    session.pop('comment', None)
                    return redirect('/')
            else:
                session['error'] = "Excuse me... Your email is not correct!"
                session.pop('email', None)
                return redirect('/')
        else:
            session['error'] = "Excuse me... Your last name is not correct!"
            session.pop('last_name', None)
            return redirect('/')
    else:
        session['error'] = "Excuse me... Your first name is not correct!"
        session.pop('first_name', None)
        return redirect('/')

@app.route('/results')
def show_results():
    return render_template('results.html')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
