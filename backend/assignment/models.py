from django.db import models
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

    def __str__(self):
        return self.title
class Graded_Assignment(models.Model):
    student = models.ForeignKey(Student, default=1, on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.SET_NULL, blank= True, null= True)
    grade = models.FloatField()

    def __str__(self):
        return self.student

class Choice(models.Model):
    title = models.CharField(max_length=500)
    
    def __str__(self):
        return self.title
class Question(models.Model):
    question = models.CharField(max_length=500)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name='answer')
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question
