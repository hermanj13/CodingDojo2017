from flask import Flask, render_template, request, redirect, flash
import re
app = Flask(__name__)
app.secret_key = 'actAFool'

def email_valid(email):
    if not re.match("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$", email):
        return False
    return True

def date_validate(date):
    while True:
        try:
            parsed = time.strptime(date, "%m/%d/%Y")
        except ValueError as e:
            print "Could not parse date: {0}".format(e)
        else:
            return parsed[:3]



first_name = ""
last_name = ""
email = ""
password = ""
confirm = ""


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    global first_name, last_name, email, password, confirm
    flag = False
    first_name = request.form['first_name'].strip()
    print first_name
    if not str.isalpha(str(first_name)):
        flag = True
        flash("Excuse me m'Lord... Your first name is not correct!")
    last_name = request.form['last_name'].strip()
    if not str.isalpha(str(last_name)):
        flag = True
        flash("Excuse me m'Lord... Your last name is not correct!")
    email = request.form['email'].strip()
    if not email_valid(str(email)):
        flag = True
        flash("Excuse me m'Lord... Your email is not correct!")
    password = request.form['pw'].strip()
    confirm = request.form['pw_confirm'].strip()
    if not password == confirm:
        flag = True
        flash("Excuse me m'Lord... Your passwords do not match!")
    if flag == True:
        return redirect('/')
    else:
        return redirect('/results')


@app.route('/results')
def show_results():
    return render_template('results.html', first_name=first_name, last_name=last_name, email=email, password=password)


app.run(debug=True)
