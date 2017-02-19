from django.shortcuts import render, redirect
import random, string

# Create your views here.
def word_generator():
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(14))

def index(request):
    if 'random_word' not in request.session:
        request.session['random_word'] = word_generator()
    if 'counter' not in request.session:
        request.session['counter'] = 1
    return render(request, 'random_word/index.html')

def new_random(request):
    if request.method == "POST":
        request.session['random_word'] = word_generator()
        request.session['counter'] += 1
        return redirect("/")
    else:
        return redirect("/")

def reset(request):
    if 'random_word' in request.session:
        del request.session['random_word']
    if 'counter' in request.session:
        del request.session['counter']
    return redirect("/")
