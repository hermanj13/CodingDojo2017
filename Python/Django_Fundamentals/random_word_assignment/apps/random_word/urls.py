from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^new_random$', views.new_random),
    url(r'^reset$', views.reset)
]
