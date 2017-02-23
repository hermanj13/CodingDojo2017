from __future__ import unicode_literals
import re, bcrypt
from django.db import models
from django.contrib import messages

# Create your models here.
class UserManager(models.Manager):
    def regvalidate(self, validate, request):
        if User.objects.filter(email = validate['email']).exists():
            messages.error(request, 'Email Already Registered', extra_tags='register')
            return True
        else:
            if len(validate['first_name']) >= 2:
                if len(validate['last_name']) >= 2:
                    if re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', validate['email']):
                        if len(validate['password']) >= 8:
                            if validate['password'] == validate['confirm']:
                                password = bcrypt.hashpw(str(validate['password']), bcrypt.gensalt())
                                User.objects.create(first_name = validate['first_name'], last_name = validate['last_name'], email = validate['email'], password = password)
                                request.session['id'] = User.objects.only('id').get(email = validate['email']).id
                                request.session['name'] = validate['first_name']
                                messages.success(request, 'Successfully Registered!')
                                return False
                            else:
                                messages.error(request, 'Passwords do not match.', extra_tags='register')
                                return True
                        else:
                            messages.error(request, 'Invalid Password, must be no fewer then 8 characters.', extra_tags='register')
                            return True
                    else:
                        messages.error(request, 'Invalid Email.', extra_tags='register')
                        if not len(validate['password']) >= 8:
                            messages.error(request, 'Invalid Password, must be no fewer then 8 characters.', extra_tags='register')
                            if validate['password'] != validate['confirm']:
                                messages.error(request, 'Passwords do not match.', extra_tags='register')
                        return True
                else:
                    messages.error(request, 'Invalid Last Name.', extra_tags='register')
                    if not re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', validate['email']):
                        messages.error(request, 'Invalid Email.', extra_tags='register')
                    if not len(validate['password']) >= 8:
                        messages.error(request, 'Invalid Password, must be no fewer then 8 characters.', extra_tags='register')
                        if validate['password'] != validate['confirm']:
                            messages.error(request, 'Passwords do not match.', extra_tags='register')
                    return True
            else:
                messages.error(request, 'Invalid First Name.', extra_tags='register')
                if not len(validate['last_name']) >= 2:
                    messages.error(request, 'Invalid Last Name.', extra_tags='register')
                if not re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', validate['email']):
                    messages.error(request, 'Invalid Email.', extra_tags='register')
                if not len(validate['password']) >= 8:
                    messages.error(request, 'Invalid Password, must be no fewer then 8 characters.', extra_tags='register')
                    if validate['password'] != validate['confirm']:
                        messages.error(request, 'Passwords do not match.', extra_tags='register')
                return True
    def loginvalidate(self,validate,request):
        if User.objects.filter(email = validate['email']).exists():
            hashed = str(User.objects.only('password').get(email = validate['email']).password)
            if hashed == bcrypt.hashpw(str(validate['password']), hashed):
                request.session['id'] = User.objects.only('id').get(email = validate['email']).id
                request.session['name'] = User.objects.only('first_name').get(email = validate['email']).first_name
                messages.success(request, 'Successfully Logged In!')
                return False
            else:
                messages.warning(request, 'Passwords Do Not Match, Please Try Again.', extra_tags='login')
                return True
        else:
            messages.warning(request, 'Email Not Registed, Please Sign Up!', extra_tags='login')
            return True


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField()
    password = models.CharField(max_length=60)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
