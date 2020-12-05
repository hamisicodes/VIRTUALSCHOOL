from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from .models import Assignment, Graded_Assignment
from .serializers import AssignmentSerializer, GradedAssignmentSerializer




class AssignmentViewSet(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

class GradedAssignmentListView(ListAPIView):
    serializer_class =  GradedAssignmentSerializer
    queryset = Graded_Assignment.objects.all()
    
    # quering for specific user, to define defferent students.
    def get_queryset(self):
        queryset = Graded_Assignment.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(student_username=username)
        return queryset
    
class GradedAssignmentCreateView(CreateAPIView):
    serializer_class = GradedAssignmentSerializer
    queryset = Graded_Assignment.objects.all()
    
    # overing post method
    def post(self, request):
        print("data is to appear below")
        print(request.data)
        serializer = GradedAssignmentSerializer(data = request.data)
        if serializer.is_valid():
            gradedAssignmentData = serializer.create(request)
            if gradedAssignmentData:
                return Response(status = HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)