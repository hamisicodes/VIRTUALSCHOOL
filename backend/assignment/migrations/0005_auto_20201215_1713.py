# Generated by Django 3.1.2 on 2020-12-15 14:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assignment', '0004_auto_20201211_2224'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='assignment',
            options={'ordering': ['-id']},
        ),
    ]