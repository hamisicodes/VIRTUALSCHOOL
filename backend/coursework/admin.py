from django.contrib import admin
from  .models import Profile,Educator,Student,Course,Module,Page
from django.utils.html import format_html
from django.urls import reverse
from django.utils.http import urlencode


class CourseAdmin(admin.ModelAdmin):

    def photo(self,object):
        return format_html('<img src="{}" width="50" height="50" style="border-radius:10px;" />'.format(object.thumbnail.url))

    photo.short_description = 'thumbnail'

    def students_count(self,object):
        count = object.student_set.count()
        url = (
            reverse("admin:coursework_student_changelist")
            + "?"
            + urlencode({"courses__id": f"{object.id}"})
        )
        return format_html('<a href="{}">{} Students</a>', url, count)

    students_count.short_description = 'students'

    list_display = ('__str__','photo','educator','students_count')
    list_display_links = ('__str__','photo')
    search_fields = ('__str__','educator','created')
    list_filter = ('title',)


class StudentAdmin(admin.ModelAdmin):
    list_display = ('__str__' ,'admission_number','gender')
    list_display_links = ('__str__' ,'admission_number')
    list_filter = ('gender',)
    filter_horizontal = ('courses',)



class EducatorAdmin(admin.ModelAdmin):
    list_display = ('__str__' ,'staff_number','gender')
    list_display_links = ('__str__' ,'staff_number')
    list_filter = ('gender',)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('__str__' ,'first_name','last_name','created','modified')
    list_display_links = ('__str__' ,'first_name','last_name')

    

admin.site.register(Profile,ProfileAdmin)
admin.site.register(Educator,EducatorAdmin)
admin.site.register(Student,StudentAdmin)
admin.site.register(Course,CourseAdmin)
admin.site.register(Module)
admin.site.register(Page)

