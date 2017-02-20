from django.shortcuts import render, redirect
import random

# Create your views here.
def index(request):
    if 'total_gold' not in request.session:
        request.session['total_gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = ['']
    if request.session['total_gold'] < 0:
        return redirect('/lost')
    print request.session['activities']
    return render(request, 'ninja_gold/index.html')

def process_money(request):
    if request.method == "POST":
        if request.POST['action'] == 'farm':
            additive = random.randrange(10,20)
            request.session['total_gold'] += additive
            activity_printer = "Earned " + str(additive) + " gold from the farm!"
            request.session['activities'].append(activity_printer)
        if request.POST['action'] == 'cave':
            additive = random.randrange(5,10)
            request.session['total_gold'] += additive
            activity_printer = "Earned " + str(additive) + " gold from the farm!"
            request.session['activities'].append(activity_printer)
        if request.POST['action'] == 'house':
            additive = random.randrange(2,5)
            request.session['total_gold'] += additive
            activity_printer = "Earned " + str(additive) + " gold from the farm!"
            request.session['activities'].append(activity_printer)
        if request.POST['action'] == 'casino':
            additive = random.randrange(-50,50)
            request.session['total_gold'] += additive
            if additive < 0:
                activity_printer = "Lost " + str(additive) + " gold in the casino!"
                request.session['activities'].append(activity_printer)
            else:
                activity_printer = "Earned " + str(additive) + " gold in the casino!"
                request.session['activities'].append(activity_printer)
        return redirect('/')
    else:
        return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')

def lost(request):
    return render(request, 'ninja_gold/lost.html')
