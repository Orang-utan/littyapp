from django.conf import settings
from django.http import HttpResponse
from twilio.rest import Client


def sms(request):
    message_to_broadcast = (
        "Your order has been placed! Come pickup in 15 mins - Littalicious!")
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
        if recipient:
            client.messages.create(to=recipient,
                                   from_=settings.TWILIO_NUMBER,
                                   body=message_to_broadcast)
    return HttpResponse("Your order has been placed!", 200)
