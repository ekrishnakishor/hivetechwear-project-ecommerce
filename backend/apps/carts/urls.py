from django.urls import path
from . import views

urlpatterns =[
    path('', views.CartList.as_view(), name='cart-list'),
    path('add/', views.CartAdd.as_view(), name='cart-add'),
    path('update/<int:id>/', views.CartUpdate.as_view(), name='cart-update'),
]