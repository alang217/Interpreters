from django.urls import path
from . import views
urlpatterns = [    
    path('', views.index),
    path('test', views.index),
    path('admin-login', views.index),
    path('admin/<int:id>', views.index),
    path('admin/dashboard', views.index),
    path('admin/add-business', views.index),
    path('admin/NMIsetup-1', views.index),
    path('admin/NMIsetup-2', views.index)
]