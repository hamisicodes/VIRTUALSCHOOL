from rest_framework import serializers
from .models import Demo


class DemoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Demo
        fields = (
            "title",
            "content"
        )