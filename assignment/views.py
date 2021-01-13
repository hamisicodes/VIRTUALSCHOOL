from rest_framework import viewsets
from rest_framework.permissions import AllowAny
# from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from .models import Assignment, Graded_Assignment
from .serializers import AssignmentSerializer, GradedAssignmentSerializer




class AssignmentViewSet(viewsets.ModelViewSet):
    # permission_classes = (AllowAny,) 
    # authentication_classes = (TokenAuthentication,) 
    serializer_class = AssignmentSerializer
    serializer = AssignmentSerializer
    queryset = Assignment.objects.all()
    
    # overiding the create method
    def create(self, request):
        serializer = AssignmentSerializer (data =request.data)
        if serializer.is_valid():
            assignment = serializer.create(request)
            if assignment:
                return Response(status=HTTP_201_CREATED)
        return Response (status=HTTP_400_BAD_REQUEST)
    
   
 
    
 

class GradedAssignmentListView(ListAPIView):
    serializer_class =  GradedAssignmentSerializer
    queryset = Graded_Assignment.objects.all()
    
    # quering for specific user, to define defferent students.
    def get_queryset(self):
        queryset = Graded_Assignment.objects.all()
        pk= self.request.user.id
        if pk is not None:
            queryset = queryset.filter(id=pk)
        return queryset
    
class GradedAssignmentCreateView(CreateAPIView):
    serializer_class = GradedAssignmentSerializer
    
    def get_queryset(self, request):
        queryset = Graded_Assignment.objects.all()
        pk = request.user.id
        print('ia m')
        print(pk)
        if pk is not None:
            queryset = queryset.filter(id=pk)
        return queryset
    
    # overing post method
    def post(self, request):
        serializer = GradedAssignmentSerializer(data = request.data)
        serializer.is_valid()
        gradedAssignmentData = serializer.create(request)
        if gradedAssignmentData:
            return Response(status = HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)