from django.contrib import admin
from django.contrib.admin.helpers import InlineAdminFormSet
from .models import Choice, Assignment, Question, Graded_Assignment,Educator, Student
from django.contrib.auth.admin import UserAdmin
# from .models import User




# Register your models here.
# admin.site.register(User, UserAdmin)
admin.site.register(Choice)
admin.site.register(Graded_Assignment)
admin.site.register(Educator)
admin.site.register(Student)



# registering Assignent to have customization in admin
class TabularQuestion(admin.TabularInline):
    model = Question
    extra = 1 
@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    inlines = [TabularQuestion]
    fields = (
        "title",
        "educator",
        "slug"
        
    )
    search_fields = ('title', 'educator')


# admin.site.register(Assignment, AssignmentAdmin)

