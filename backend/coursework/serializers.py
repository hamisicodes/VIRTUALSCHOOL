from rest_framework import serializers
from .models import Course,Module,Page

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('title','thumbnail','educator','slug')


       

class CourseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Course
        fields = '__all__'
        lookup_field = 'slug'

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
    pages = serializers.SerializerMethodField()
    class Meta:
        model = Module
        fields = '__all__'

    def get_pages(self,obj):
        modulePages = obj.page_set.all()
        serializer = PageSerializer(modulePages , many=True)
        return serializer.data



