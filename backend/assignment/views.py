from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .models import Assignment, Graded_Assignment
from .serializers import AssignmentSerializer, GradedAssignmentSerializer




class AssignmentViewSet(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()








class GradedAssignmentListView(ListAPIView):
    serializer_class =  GradedAssignmentSerializer
    queryset = Graded_Assignment.objects.all()