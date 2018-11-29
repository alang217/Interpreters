from django.shortcuts import render
from django.views.decorators.cache import never_cache

@never_cache
def index(request):
    return render(request, 'frontend/index.html')
    #react will manage index as a Single-Page Application
