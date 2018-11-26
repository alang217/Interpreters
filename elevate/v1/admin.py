from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import BusinessCreationForm, BusinessChangeForm
from .models import Business

#class BusinessAdmin(UserAdmin):
#    add_form = BusinessCreationForm
#    form = BusinessChangeForm
#    model = Business
#    list_display = ['business_name',]

admin.site.register(Business) #, BusinessAdmin)