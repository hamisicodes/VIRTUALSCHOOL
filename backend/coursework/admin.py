from django.contrib import admin
from  .models import Profile,Educator,Student

# Register your models here.
admin.site.register(Profile)
admin.site.register(Educator)
admin.site.register(Student)
