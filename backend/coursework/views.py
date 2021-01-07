from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView,RetrieveAPIView
from .models import Course,Module
from .serializers import CoursesSerializer,CourseSerializer,ModuleSerializer


class CoursesView(ListAPIView):
    serializer_class = CoursesSerializer
    queryset = Course.objects.all()
    permission_classes = (permissions.AllowAny,)

# class CourseView(RetrieveAPIView):
#     serializer_class = CourseSerializer
#     queryset = Course.objects.all()
#     permission_classes = (permissions.AllowAny,)
#     lookup_field = 'slug'

class CourseView(APIView):
    def get_object(self, slug):
        try:
            return Course.objects.get(slug=slug)
        except Course.DoesNotExist:
            raise Http404

    def get(self,request,slug,format=None):
        course = self.get_object(slug)
        modules = course.module_set.all()
        serializer = ModuleSerializer(modules , many=True)
       
        return Response(serializer.data)

