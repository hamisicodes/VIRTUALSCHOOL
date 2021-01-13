from django.urls import path
from .views import CourseView,CoursesView,PageView

urlpatterns = [
    path('', CoursesView.as_view()),
    path('<slug>/',CourseView.as_view()),
    path('page/<slug>/',PageView.as_view()),
]