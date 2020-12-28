from rest_framework import permissions
from rest_framework.generics import ListAPIView,RetrieveAPIView
from .models import Course
from .serializers import CoursesSerializer,CourseSerializer


class CoursesView(ListAPIView):
    serializer_class = CoursesSerializer
    queryset = Course.objects.all()
    permission_classes = (permissions.AllowAny,)

class CourseView(RetrieveAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'slug'

