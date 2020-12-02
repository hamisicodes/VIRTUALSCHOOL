from rest_framework import serializers
from .models import Assignment, Question, Graded_Assignment

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class QuestionSerializer(serializers.ModelSerializer):
    choices = StringSerializer(many = True)
    
    class Meta:
        model = Question
        fields = ("__all__")
        
class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    educator = StringSerializer(many = False)
    
    class Meta:
        model = Assignment
        fields = ('__all__')
    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many = True).data
        return questions 
    
class GradedAssignmentSerializer(serializers.ModelSerializer):
    student = StringSerializer(many = False)
    class Meta:
        model = Graded_Assignment
        fields = ("__all__")