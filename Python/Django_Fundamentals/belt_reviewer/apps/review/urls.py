from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.add, name='add'),
    url(r'^new$', views.new, name='new'),
    url(r'^(?P<id>\d+)$', views.book, name='book'),
]
