from django.contrib import admin
from .models import Choice, Assignment, Question, Graded_Assignment,Educator, Student

# Register your models here.
admin.site.register(Choice)
admin.site.register(Assignment)
admin.site.register(Graded_Assignment)
admin.site.register(Question)
admin.site.register(Educator)
admin.site.register(Student)

