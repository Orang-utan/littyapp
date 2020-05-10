from django.db import models
import uuid
# Create your models here.


class FoodTrucks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, unique=True)
    address = models.TextField()
    description = models.TextField()

    def __str__(self):
        return name


class FoodItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    foodtruck = models.ForeignKey(FoodTrucks, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
