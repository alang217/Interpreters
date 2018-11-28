# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BusinessSerializer, CustomerSerializer
from .models import Business, Customer


class BusinessViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
