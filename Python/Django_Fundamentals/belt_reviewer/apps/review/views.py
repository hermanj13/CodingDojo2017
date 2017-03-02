from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .models import Books

# Create your views here.

def index(request):
    return render(request, 'review/index.html')

def add(request):
    context = {
    'authors': Books.objects.all()
    }
    print context['authors'][0].author
    return render(request, 'review/add.html', context)

def new(request):
    author_test = request.POST['author_select']
    compare = request.POST['author_input']
    author = Books.objects.authors(author_test,compare)
    validate = {
    'title': request.POST['title'],
    'author': author,
    'review': request.POST['review'],
    'rating': request.POST['rating']
    }
    id = Books.objects.validator(validate)
    if type(id) == int:
        return redirect(reverse('books:book', kwargs={'id': id}))
    else:
        return redirect(reverse('books:add'))

def book(request, id):
    return redirect(reverse('books:index'))
