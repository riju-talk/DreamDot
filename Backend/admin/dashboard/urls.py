from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_all_users, name='users'),
]