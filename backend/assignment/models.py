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

class Assignment(models.Model):
    title = models.CharField()
    teacher = models.ForeignKey(User, default='testing_educator', on_delete = models.CASCADE)

    def __str__(self):
        return self.title
class Graded_Assignment(models.Model):
    student = models.ForeignKey(User, default='testing_student', on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.SET_NULL, blank= True, null= True)
    grade = models.FloatField()

    def __str__(self):
        return self.student.username

class Choice(models.Model):
    title = models.CharField()
    
    def __str__(self):
        return self.title
class Question(models.Model):
    question = models.CharField()
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name='answer')
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question
