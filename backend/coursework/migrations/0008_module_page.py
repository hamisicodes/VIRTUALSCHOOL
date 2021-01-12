# Generated by Django 3.1.2 on 2021-01-11 14:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('coursework', '0007_student_courses'),
    ]

    operations = [
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coursework.course')),
            ],
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_number', models.IntegerField(blank=True, default=1)),
                ('header', models.CharField(blank=True, max_length=100)),
                ('content', models.TextField(blank=True)),
                ('slug', models.SlugField(blank=True)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coursework.module')),
            ],
        ),
    ]
