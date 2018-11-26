from rest_framework import serializers
from .models import Business

class BusinessSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Business
        fields = (
        'business_name', 'username', 'password', 'first_name', 'last_name', 'is_active', 'email', 'phone_number',
        'expiration_date', 'business_api_key', 'street_branch_address', 'apt_branch_address', 'city_branch_address',
        'state_branch_address', 'country_branch_address', 'zip_branch_address', 'street_hq_address', 'apt_hq_address',
        'city_hq_address', 'country_hq_address', 'zip_hq_address',)