from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', route="index")

@app.route('/ninja')
def ninja():
    return render_template('index.html', route="ninjas")

@app.route('/ninja/<ninja_type>')
def turtle(ninja_type):
    if ninja_type == "blue":
        return render_template('theninjas.html', ninja_type=ninja_type)
    elif ninja_type == "orange":
        return render_template('theninjas.html', ninja_type=ninja_type)
    elif ninja_type == "red":
        return render_template('theninjas.html', ninja_type=ninja_type)
    elif ninja_type == "purple":
        return render_template('theninjas.html', ninja_type=ninja_type)
    else:
        return render_template('theninjas.html', ninja_type=ninja_type)


app.run(debug=True)
