from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Profile for any created user
class Profile(models.Model):
    first_name = models.CharField(max_length=100 , blank = True)
    last_name = models.CharField(max_length=100 , blank = True)
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add = True)
    modified = models.DateTimeField(auto_now = True)
    # avatar = models.ImageField()
    bio = models.TextField(default = 'No bio...')
  

    def __str__(self):
        return f'{self.user.username}' 

    @property
    def isSpecial(self):
        return self.user.is_staff
    
# student model that is related to the profile
class Student(models.Model):
    profile = models.OneToOneField(Profile , on_delete=models.CASCADE)
    gender = models.CharField(max_length = 6 , blank=True)
    admission_number = models.CharField(max_length = 100 , blank=True)

    def __str__(self):
       return f'Student-{self.profile}' 

# Educator model that is related to the profile
class Educator(models.Model):
    profile = models.OneToOneField(Profile , on_delete=models.CASCADE)
    gender = models.CharField(max_length = 6 , blank=True)
    staff_number = models.CharField(max_length = 100 , blank=True)

    def __str__(self):
         return f'Educator-{self.profile}' 