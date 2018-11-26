from django.db import models
from datetime import date
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Business(models.Model): # class Business(AbstractUser):
    #business_id = models.IntegerField(primary_key=True)
    business_name = models.CharField(max_length=100, blank=False)
    username = models.CharField(max_length=30, blank=False)
    password = models.CharField(max_length=30, blank=False)
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    is_active = models.BooleanField(default=False ,help_text="A business is active after payment validation.")
    email = models.CharField(max_length=60, blank=False)
    phone_number = models.CharField(max_length=15)
    expiration_date = models.DateTimeField(auto_now_add=True)
    business_api_key = models.CharField(max_length=1000, blank=True)

    # Branch Address
    street_branch_address = models.CharField(max_length=100, blank=False)
    apt_branch_address = models.CharField(max_length=100, blank=True)
    city_branch_address = models.CharField(max_length=100, blank=False)
    state_branch_address = models.CharField(max_length=100, blank=False)
    country_branch_address = models.CharField(max_length=100, blank=False)
    zip_branch_address = models.CharField(max_length=15, blank=False)

    # HQ Address
    street_hq_address = models.CharField(max_length=100, blank=False)
    apt_hq_address = models.CharField(max_length=100, blank=True)
    city_hq_address = models.CharField(max_length=100, blank=False)
    state_hq_address = models.CharField(max_length=100, blank=False)
    country_hq_address = models.CharField(max_length=100, blank=False)
    zip_hq_address = models.CharField(max_length=15, blank=False)

    class Meta:
        ordering = ('business_name',)
    def __str__(self):
        return self.business_name

