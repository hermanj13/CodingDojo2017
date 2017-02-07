from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/success')
def success():
  return render_template('success.html')

@app.route('/namepull')
def namePull():
    return render_template('namepull.html', name="boo")

app.run(debug=True)
