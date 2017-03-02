from django.conf.urls import url
# from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add_person$', views.addPerson, name='add_person'),
    url(r'^create_friendship$', views.createFriendship, name='create_friendship')
]
