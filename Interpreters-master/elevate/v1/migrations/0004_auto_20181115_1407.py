# Generated by Django 2.1.3 on 2018-11-15 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0003_auto_20181115_1358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='expiration_date',
            field=models.DateTimeField(auto_now_add=True, default='2018-11-15 14:55'),
            preserve_default=False,
        ),
    ]