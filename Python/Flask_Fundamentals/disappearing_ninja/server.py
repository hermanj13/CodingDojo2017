from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', route="index")

@app.route('/ninja')
def ninja():
    return render_template('index.html', route="ninjas")

@app.route('/ninja/<type>')
def turtle(type):
    if type == "blue":
        return render_template('theninjas.html', type=type)
    elif type == "orange":
        return render_template('theninjas.html', type=type)
    elif type == "red":
        return render_template('theninjas.html', type=type)
    elif type == "purple":
        return render_template('theninjas.html', type=type)
    else:
        return render_template('theninjas.html', type=type)


app.run(debug=True)
