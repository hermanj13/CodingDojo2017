from django.shortcuts import render
from django.core.urlresolvers import reverse

# Create your views here.

def index(request):
    if not 'id' in request.session:
        return render(request, 'login/index.html')
    messages.success(request, 'Welcome Back!')
    return redirect(reverse('books:index'))

def register(request):
    if 'id' in request.session:
        messages.success(request, 'You are Already Signed In')
        return redirect(reverse('books:index'))
    else:
        flag = False
        validate = {
        'name':request.POST['name'],
        'alias':request.POST['alias'],
        'email':request.POST['email'],
        'password':request.POST['password'],
        'confirm':request.POST['pwconf']
        }
        flag = User.objects.regvalidate(validate,request)
        if flag == True:
            return redirect(reverse('login:index'))
        if flag == False:
            return redirect(reverse('books:index'))

def login(request):
    pass

def logout(request):
    request.session.flush()
    return redirect(reverse('login:index'))

def user(request, id):
    return redirect(reverse('books:index'))
