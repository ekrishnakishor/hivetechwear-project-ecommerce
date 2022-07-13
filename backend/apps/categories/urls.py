from django.urls import path   
from . import views

urlpatterns = [
    path('', views.CategoryList.as_view(), name='list-category'),
]