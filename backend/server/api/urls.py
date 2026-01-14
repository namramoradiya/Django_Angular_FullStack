from django.urls import path
# from flask import views
from .views import user_record

urlpatterns = [
    path('users/',user_record),
]