from django.shortcuts import render, HttpResponse
import time

# Create your views here.
def index(request):
    dt = {
    "date":time.strftime('%b %d, %Y'),
    "time":time.strftime('%I:%M:%S %p')
    }
    return render(request, 'timedisplay/index.html',dt)
