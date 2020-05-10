from django.db import models

# Create your models here.


class FoodTrucks(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, unique=True)
    address = models.TextField()
    description = models.TextField()
