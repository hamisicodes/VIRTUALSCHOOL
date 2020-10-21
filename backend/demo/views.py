from rest_framework import generics, permissions
from .models import Demo
from .serializers import DemoSerializer

class DemoListView(generics.ListAPIView):
    permission_classes =[permissions.AllowAny]
    queryset = Demo.objects.all()
    serializer_class = DemoSerializer

