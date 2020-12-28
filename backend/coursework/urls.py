from django.urls import path
from .views import CourseView,CoursesView

urlpatterns = [
    path('', CoursesView.as_view()),
    path('<slug>/',CourseView.as_view()),
]