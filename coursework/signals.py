from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile,Student,Educator

@receiver(post_save , sender=User)
def post_save_create_profile(sender,instance,created, **kwargs):
    if created:
        Profile.objects.create(user = instance)

@receiver(post_save , sender=Profile)
def post_save_create_student_or_educator(sender,instance,created, **kwargs):
    if instance.isSpecial:
        Educator.objects.create(profile = instance)
    else:
        Student.objects.create(profile = instance)

        

