# Generated by Django 3.1.2 on 2020-12-29 19:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('assignment', '0007_auto_20201228_2128'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment',
            name='educator',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='graded_assignment',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='assignment',
            name='slug',
            field=models.SlugField(default='aahdfia8khgjfhd', max_length=100),
        ),
    ]
