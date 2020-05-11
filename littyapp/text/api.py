from twilio.rest import Client
from django.http import HttpResponse
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.conf.urls import url, include
from rest_framework import status
from django.conf import settings
from django.http import HttpResponse
from twilio.rest import Client
import uuid


@api_view(['POST'])
def send_sms(request):
    try:
        phone = request.data['phone']
        order = request.data['order']
        order_str = ', '.join(order)

        pickup_code = str(uuid.uuid4())[:8]

        message = "Hi! You have received a new order. Here is the order: {0}. The pickup code is: {1}.".format(
            order_str, pickup_code)

        print(settings.TWILIO_ACCOUNT_SID)

        client = Client(settings.TWILIO_ACCOUNT_SID,
                        settings.TWILIO_AUTH_TOKEN)

        client.messages.create(to=phone,
                               from_=settings.TWILIO_NUMBER,
                               body=message)

        return Response({"success": "Order has been placed.", "pickup_code": pickup_code})
    except:
        return Response({"error": "Something has gone wrong."}, status=status.HTTP_400_BAD_REQUEST)
