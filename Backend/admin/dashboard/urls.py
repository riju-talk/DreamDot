from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_all_users),
    path('blacklisted-users/', views.get_all_blacklisted_users),
    path('block_user/', views.block_user),         # POST to block a user
    path('unblock_user/', views.unblock_user),       # POST to unblock a user
    path('make_creator/', views.make_creator),       # PUT to make a user a creator
    path('revoke_creator/', views.revoke_creator),   # PUT to revoke creator status
]