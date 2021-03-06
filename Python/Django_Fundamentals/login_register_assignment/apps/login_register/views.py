from django.shortcuts import render,redirect
from django.contrib import messages
from django.core.urlresolvers import reverse
from .models import User

# Create your views here.

def index(request):
    if not 'id' in request.session:
        return render(request, 'login_register/index.html')
    messages.success(request, 'Welcome Back!')
    return redirect(reverse('login:success'))




def register(request):
    if 'id' in request.session:
        messages.success(request, 'You are Already Signed In')
        return redirect(reverse('login:success'))
    else:
        flag = False
        validate = {
        'first_name':request.POST['first_name'],
        'last_name':request.POST['last_name'],
        'email':request.POST['email'],
        'password':request.POST['password'],
        'confirm':request.POST['pwconf']
        }
        flag = User.objects.regvalidate(validate,request)
        if flag == True:
            return redirect(reverse('login:index'))
        if flag == False:
            return redirect(reverse('login:success'))

def login(request):
    flag = False
    validate = {
    'email':request.POST['email'],
    'password':request.POST['password']
    }
    flag = User.objects.loginvalidate(validate,request)
    if flag == True:
        return redirect(reverse('login:index'))
    if flag == False:
        return redirect(reverse('login:success'))

def success(request):
    if 'id' in request.session:
        return render(request, 'login_register/success.html')
    else:
        messages.success(request, 'You can not access that page until you are logged in. Please login or register below.', extra_tags='not')
        return redirect(reverse('login:index'))

def reset(request):
    request.session.flush()
    return redirect(reverse('login:index'))
