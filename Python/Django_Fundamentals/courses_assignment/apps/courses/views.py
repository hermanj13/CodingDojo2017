from django.shortcuts import render, HttpResponse, redirect
from .models import Course, Description, Comment
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
	context = {
		'results': Description.objects.all()
	}
	return render(request, 'courses/index.html', context)

def add_course(request):
	course = Course.objects.create(name=request.POST['name'])
	Description.objects.create(description= request.POST['description'], course_id = course.id)
	return redirect(reverse('courses:index'))

def delete(request, id):
	Course.objects.get(id=id).delete()
	Description.objects.filter(course_id=id).delete()
	return redirect(reverse('courses:index'))

def comment(request, id):
	context={
			'course': Course.objects.get(id=id),
			'comments': Comment.objects.filter(course_id=id)
	}
	return render(request, 'courses/comment.html', context)

def add_comment(request, id):
	Comment.objects.create(comment=request.POST['comment'],course_id=id)
	return redirect(reverse('courses:comment', kwargs={'id': id}))
