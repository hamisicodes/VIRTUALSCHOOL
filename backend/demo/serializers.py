from rest_framework import serializers
from .models import Demo
from django.contrib.auth.models import User


class DemoSerializer(serializers.ModelSerializer):
    def retrieve(self, request):
        user = request.User
        if (user.is_staff):
            title = True
        else:
            title = False
        return(title)
            
    class Meta:
        model = Demo,
        fields = (
            "__all__"
        )