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
        
    # overriding the create method
    def create(self, request):
        data =request.data
        assignment = Assignment.objects.get(id =data['asntID'])
        # student = User.object.get(username.data['username'])
        
        graded_assignment = Graded_Assignment()
        graded_assignment.assignment = assignment
        # graded_assignment = student
        
        # keping a count for correct choices presented by the user(student). This will form the basis of grade
        # geting all the questions available for the given assignent
        questions =[q for q in assignment.questions.all()]
        
        # getting each choice clicked by the user from answers dictionary
        answers = [data['answers'][a] for a in data['answers']]
        
        gradeCount =0;
        for i in range(len(questions)):
            if questions[i].answer.title == answers[i]:
                gradeCount+=1
                i +=1
        grade = (gradeCount/len(questions))*100
        # assigning grade to the graded_assignment
        
        graded_assignment.grade =grade
        graded_assignment.save()
        return graded_assignment
        
        