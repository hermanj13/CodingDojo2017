from __future__ import unicode_literals
from django.db import models
from django.contrib import messages
from ..login.models import User

# Create your models here.
class BookManager(models.Manager):
    def authors(self, author_test,compare):
        if author_test == 'add_my_own':
            author = compare
        else:
            author = author_test
        print author
        return author
    def validator(self,validate):
        if Books.objects.filter(title = validate['title']).exists():
            messages.error(request, 'Book Already Exists')
            return True
        else:
            Books.objects.create(title = validate['title'], author = validate['author'], review = validate['review'], rating = validate['rating'])
            id = Books.objects.only('id').get(title = validate['title']).id
            return id

class Books(models.Model):
    title = models.CharField(max_length=60)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = BookManager()

class Author(models.Model):
    author = models.CharField(max_length=60)
    books = models.ForeignKey(Books, related_name='author')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Reviews(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    books = models.ForeignKey(Books, related_name='reviews')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
