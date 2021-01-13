from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Course,Module,Page
from rest_framework.fields import CurrentUserDefault

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CoursesSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = Course
        fields = ('title','thumbnail','educator','slug','user')

    def get_user(self,obj):
        request = self.context['request']
       
        if request.user:
            serializer = UserSerializer(request.user)
            return serializer.data
        
       

class CourseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Course
        fields = '__all__'
        lookup_field = 'slug'

class PagesSerializer(serializers.ModelSerializer):
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

        serializer = PagesSerializer(modulePages , many=True)

        user = CurrentUserDefault
        print(user)
       
        return serializer.data

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('header','content','slug')
        lookup_field = 'slug'

