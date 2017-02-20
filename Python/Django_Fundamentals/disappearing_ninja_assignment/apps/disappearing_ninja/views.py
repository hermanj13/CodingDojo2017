from django.shortcuts import render

# Create your views here.

def index(request):
    context = {'route' : 'index'}
    return render(request, 'disappearing_ninja/index.html', context)

def ninja(request):
    context = {'route' : 'ninjas'}
    return render(request, 'disappearing_ninja/index.html', context)

def turtle(request,color):
    context = {'color' : color}
    return render(request, 'disappearing_ninja/ninjas.html', context)
