# Generated by Django 2.1.3 on 2018-11-15 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0002_auto_20181115_1357'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='apt_branch_address',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='apt_hq_address',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='business_api_key',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='business',
            name='city_branch_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='city_hq_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='country_branch_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='country_hq_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='email',
            field=models.CharField(default='', max_length=60),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='is_active',
            field=models.BooleanField(default=False, help_text='A business is active after payment validation.'),
        ),
        migrations.AddField(
            model_name='business',
            name='state_branch_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='state_hq_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='street_branch_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='street_hq_address',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='zip_branch_address',
            field=models.CharField(default='', max_length=15),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='business',
            name='zip_hq_address',
            field=models.CharField(default='', max_length=15),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='business',
            name='first_name',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='business',
            name='last_name',
            field=models.CharField(max_length=60),
        ),
    ]