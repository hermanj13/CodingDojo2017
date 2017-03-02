from django.shortcuts import render, redirect
from .models import Person, Friendships
from django.core.urlresolvers import reverse
# Create your views here.
def index(request):
    context = {
    'people': Person.objects.all(),
    'friendships': Friendships.objects.all()
    }
    return render(request, 'Make_Friends/index.html', context)

def addPerson(request):
    if request.method == "POST":
        Person.objects.create(name=request.POST['new_person'])
    return redirect(reverse('makefriends:index'))

def createFriendship(request):
    if request.method == "POST":
        Friendships.objects.create(friend1=Person.objects.get(id=request.POST['friend1']), friend2=Person.objects.get(id=request.POST['friend2']))
    return redirect(reverse('makefriends:index'))
