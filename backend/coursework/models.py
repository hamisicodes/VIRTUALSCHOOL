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

# Educator model that is related to the profile
class Educator(models.Model):
    profile = models.OneToOneField(Profile , on_delete=models.CASCADE)
    gender = models.CharField(max_length = 6 , blank=True)
    staff_number = models.CharField(max_length = 100 , blank=True)

    def __str__(self):
         return f'Educator-{self.profile}' 


def upload_post_image(instance,filename):
    return f"{instance.title}/{filename}"

class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(default = 'Course created successfully.Description should be inserted anytime soon')
    educator = models.ForeignKey(Educator , on_delete=models.CASCADE)
    slug = models.SlugField()
    thumbnail = models.ImageField(upload_to =upload_post_image)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.title}"
    
# student model that is related to the profile
class Student(models.Model):
    profile = models.OneToOneField(Profile , on_delete=models.CASCADE)
    gender = models.CharField(max_length = 6 , blank=True)
    admission_number = models.CharField(max_length = 100 , blank=True)
    courses = models.ManyToManyField(Course,blank=True)
    def __str__(self):
       return f'{self.profile}' 

class Module(models.Model):
    title = models.CharField(max_length=100, blank=True)
    course = models.ForeignKey(Course , on_delete=models.CASCADE)

    def __str__(self):
       return f'{self.title}' 

class Page(models.Model):
    page_number = models.IntegerField(blank = True , default=1)
    header = models.CharField(max_length=100 , blank=True)
    module = models.ForeignKey(Module , on_delete=models.CASCADE)
    content = models.TextField(blank=True)


    def __str__(self):
       return f'{self.header}' 







