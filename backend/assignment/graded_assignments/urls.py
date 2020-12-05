from django.urls import path
from assignment.views import GradedAssignmentListView


urlpatterns = [
    path('', GradedAssignmentListView.as_view())
]