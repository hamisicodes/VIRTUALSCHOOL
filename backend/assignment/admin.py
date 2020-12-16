from django.contrib import admin
from .models import Choice, Assignment, Question, Graded_Assignment,Educator, Student
from django.contrib.auth.admin import UserAdmin
# from .models import User




# Register your models here.
# admin.site.register(User, UserAdmin)
admin.site.register(Choice)
admin.site.register(Assignment)
admin.site.register(Graded_Assignment)
admin.site.register(Question)
admin.site.register(Educator)
admin.site.register(Student)


