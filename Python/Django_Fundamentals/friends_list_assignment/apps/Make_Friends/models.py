from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length = 45)

class Friendships(models.Model):
    friend1 = models.ForeignKey(Person)
    friend2 = models.ForeignKey(Person, related_name='friends')
