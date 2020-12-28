from django.db import models
# from django.contrib.auth.models import AbstractUser
from rest_framework.generics import ListAPIView
# from users.model import User




# assigment model
    # -title
    # -educator
# gradeasssignment model
    # -student(fk)
    # -assignment(fk)
    # -grade

# question model
    # question(title)
    # choices(many)
    # answer
    # assignment(fk)
    # order

# Choice mode
#   -title

# class User(AbstractUser):
#     is_student = models.BooleanField('student status', default=False)
#     is_teacher = models.BooleanField('teacher status', default=False)
class Educator(models.Model):
    educator_name = models.CharField(max_length=50)

    def __str__(self):
        return self.educator_name
class Student(models.Model):
    student_name = models.CharField(max_length=50)

    def __str__(self):
        return self.student_name

class Assignment(models.Model):
    title = models.CharField(max_length=500)
    educator = models.ForeignKey(Educator, default=1, on_delete = models.CASCADE)
    slug = models.SlugField(max_length=100, default='aahdfia8')

    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-id']
        
class Graded_Assignment(models.Model):
    student = models.ForeignKey(Student, default=1, on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.SET_NULL, blank= True, null= True)
    grade = models.FloatField()
    
    class Meta:
        ordering = ['-id']

    def __str__(self):
        return str(self.student)

class Choice(models.Model):
    title = models.CharField(max_length=500)
    
    
    def __str__(self):
        return self.title
    
class Question(models.Model):
    order = models.SmallIntegerField()
    question = models.CharField(max_length=500)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name='answer', null=True, blank=True)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, related_name = 'questions')
   

    def __str__(self):
        return self.question
