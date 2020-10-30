from rest_framework import serializers
from .models import Assignment, Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('__all__')
class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    class Meta:
        model = Assignment
        fields = ('__all__')
    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many = True)
        return questions