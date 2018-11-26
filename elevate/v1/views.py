from django.shortcuts import render
from .serializers import BusinessSerializer
from .models import Business
from rest_framework import viewsets

class BusinessViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer
