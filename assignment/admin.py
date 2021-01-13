from django.contrib import admin
from django.contrib.admin.helpers import InlineAdminFormSet
from .models import Choice, Assignment, Question, Graded_Assignment
from django.contrib.auth.admin import UserAdmin
# from .models import User




# Register your models here.
admin.site.register(Choice)
admin.site.register(Graded_Assignment)

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
    list_display_links=['title']
    list_display = ("educator","title")
    search_fields = ('title', 'educator')


