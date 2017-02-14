from flask import Flask, render_template, request, redirect, session, flash
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'the_wall')
app.secret_key = 'actAFool'

def email_valid(email):
    if not re.match("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$", email):
        return False
    return True


@app.route('/')
def index():
    if 'id' not in session:
        return render_template('index.html')
    else:
        return redirect('/wall')

@app.route('/register')
def register():
    if 'id' not in session:
        return render_template('register.html')
    else:
        return redirect('/wall')


@app.route('/create', methods=['POST'])
def create():
    flag = False
    first_name = request.form['first_name'].strip()
    if not str.isalpha(str(first_name)):
        flag = True
        flash("Incorrect First Name")
    last_name = request.form['last_name'].strip()
    if not str.isalpha(str(last_name)):
        flag = True
        flash("Incorrect Last Name")
    email = request.form['email'].strip()
    if not email_valid(str(email)):
        flag = True
        flash("Incorrect Email")
    password = request.form['password']
    password_confirm = request.form['pwconf']
    if not password == password_confirm:
        flag = True
        flash("Incorrect Password")
    else:
         pw_hash = bcrypt.generate_password_hash(password)
    if flag == True:
        return redirect('/register')
    else:
        query = "SELECT * FROM users where users.email = :email LIMIT 1"
        data = {
        'email': email
        }
        user = mysql.query_db(query, data)
        if user != []:
            flash("You're already registered!")
            return redirect('/')
        else:
            query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, now(), now())"
            data = {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'pw_hash': pw_hash
            }
            mysql.query_db(query, data)
            return redirect('/')


@app.route('/login', methods=['POST'])
def confirmlogin():
    flag = False
    email = request.form['email'].strip()
    if not email_valid(str(email)):
        flag = True
        flash("Invalid Email")
    password = request.form['password']
    if flag == True:
        return redirect('/')
    else:
        query = "SELECT * FROM users where users.email = :email LIMIT 1"
        data = {
        'email': email
        }
        user = mysql.query_db(query, data)
        if user == []:
            flash("Incorect Email")
            return redirect('/')
        if bcrypt.check_password_hash(user[0]['pw_hash'], password):
            query = "SELECT id, first_name, last_name FROM users where users.email = :email LIMIT 1"
            data = {
            'email': email
            }
            session['id'] = mysql.query_db(query, data)
        else:
            flash("Incorrect Password")
        return redirect('/')

@app.route('/wall')
def wall():
    if 'id' not in session:
        return redirect('/')
    else:
        mess_query = "SELECT messages.id, first_name, last_name, message, messages.created_at FROM users JOIN messages ON users.id = messages.users_id ORDER BY created_at desc"
        messages = mysql.query_db(mess_query)
        com_query = "SELECT messages.id, first_name, last_name, comment, comments.created_at FROM users JOIN comments ON users.id = comments.users_id JOIN messages ON messages.id = comments.messages_id ORDER BY created_at"
        comment = mysql.query_db(com_query)
        return render_template('wall.html', messages=messages, comment=comment)

@app.route('/postmessage', methods=['POST'])
def postmess():
    query = "INSERT INTO messages (users_id, message, created_at, updated_at) VALUES (:users_id, :message, now(), now())"
    data = {
        'users_id': session['id'][0].values()[2],
        'message': request.form['message']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/postcomment', methods=['POST'])
def postcomm():
    query = "INSERT INTO comments (users_id, messages_id, comment, created_at, updated_at) VALUES (:users_id, :messages_id, :comment, now(), now())"
    data = {
        'users_id': session['id'][0].values()[2],
        'messages_id': (request.form['id']),
        'comment': request.form['comment']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been successfully logged out.')
    return redirect('/')

app.run(debug=True)
