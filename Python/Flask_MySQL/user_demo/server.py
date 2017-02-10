from flask import Flask, render_template, request, redirect
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app, 'user_demo')

@app.route('/')
def index():
    query = "SELECT * FROM user"
    users = mysql.query_db(query)
    return render_template('index.html', users=users)

@app.route('/create', methods=['POST'])
def create():
    query = "INSERT INTO user (first_name, last_name, age, created_at, updated_at) VALUES (:first_name, :last_name, :age, now(), now())"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age']
    }
    mysql.query_db(query, data)
    return redirect('/')
app.run(debug=True)
