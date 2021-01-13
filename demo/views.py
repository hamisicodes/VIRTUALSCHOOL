from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .models import Demo
from .serializers import DemoSerializer

class DemoListView(generics.ListAPIView):
    def retrieve(self, request):
           def retrieve(self, request):
            currentUser = request.User
            serializer_class = DemoSerializer(currentUser)

