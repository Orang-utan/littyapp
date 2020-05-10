# urls.py

from django.urls import path, include
from .views import sms

urlpatterns = [
    # Here we add our Twilio URLs
    path('sms', sms, name='sms'),
]
