from django.urls import path
from . import views

app_name = 'demo'
urlpatterns = [
    path('demo/', views.DemoListView.as_view() , name='demo_list'),

]
