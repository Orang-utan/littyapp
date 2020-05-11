from django.urls import path, include
from django.conf.urls import url, include
from .api import send_sms

urlpatterns = [
    url('api/sms/', send_sms),
]
