from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    return render(request, 'survey_form/index.html')

def results(request):
    return render(request, 'survey_form/results.html')

def process(request):
    if request.method == 'POST':
        request.session['counter'] += 1
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        return redirect('/results')
    else:
        return redirect('/')
