from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Course(models.Model):
	name= models.CharField(max_length=255)
	created_at= models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Description(models.Model):
	description= models.CharField(max_length=255)
	course =  models.ForeignKey(Course)
	created_at= models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
	comment= models.CharField(max_length=255)
	course =  models.ForeignKey(Course)
	created_at= models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)