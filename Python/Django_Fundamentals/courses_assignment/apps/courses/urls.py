from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add_course$', views.add_course, name='add_course'),
    url(r'^delete/(?P<id>\d+)$', views.delete, name='delete'),
    url(r'^comment/(?P<id>\d+)$', views.comment, name='comment'),
    url(r'^add_comment/(?P<id>\d+)$', views.add_comment, name='add_comment'),
]
