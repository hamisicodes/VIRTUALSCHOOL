from rest_framework import serializers
from .models import Course

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('title','thumbnail','educator')
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
        lookup_field = 'slug'