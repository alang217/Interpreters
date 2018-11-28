# from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Business, Customer


class BusinessCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Business
        fields = (
            'business_name', 'username', 'password', 'first_name', 'last_name', 'is_active', 'email',
            'phone_number', 'business_api_key', 'street_branch_address', 'apt_branch_address',
            'city_branch_address', 'state_branch_address', 'country_branch_address', 'zip_branch_address',
            'street_hq_address', 'apt_hq_address', 'city_hq_address', 'country_hq_address', 'zip_hq_address',
        )


class BusinessChangeForm(UserChangeForm):

    class Meta:
        model = Business
        fields = (
            'business_name', 'username', 'password', 'first_name', 'last_name', 'is_active', 'email',
            'phone_number', 'business_api_key', 'street_branch_address', 'apt_branch_address',
            'city_branch_address', 'state_branch_address', 'country_branch_address', 'zip_branch_address',
            'street_hq_address', 'apt_hq_address', 'city_hq_address', 'country_hq_address', 'zip_hq_address',
        )


class CustomerCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Customer
        fields = (
            'username', 'phone_number', 'business_id', 'street_home_address', 'apt_home_address',
            'city_home_address', 'state_home_address', 'country_home_address', 'zip_home_address',
        )


class CustomerChangeForm(UserChangeForm):

    class Meta(UserCreationForm):
        model = Customer
        fields = (
            'username', 'phone_number', 'business_id', 'street_home_address', 'apt_home_address',
            'city_home_address', 'state_home_address', 'country_home_address', 'zip_home_address',
        )
