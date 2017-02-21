from django.conf.urls import url
# from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_person$', views.addPerson),
    url(r'^create_friendship$', views.createFriendship)
]
