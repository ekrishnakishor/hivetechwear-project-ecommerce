from django.urls import path
from . import views

urlpatterns =[
    path('', views.OrderList.as_view(), name='order-list'),
    path('add/', views.OrderAdd.as_view(), name='order-add')
]