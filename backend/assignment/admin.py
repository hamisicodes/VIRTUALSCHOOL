from django.contrib import admin
from .models import Choice, Assignment, Question, Graded_Assignment

# Register your models here.
admin.site.Register(Choice, Assignment, Question, Graded_Assignment)