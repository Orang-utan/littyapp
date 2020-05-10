from django.db import models
import uuid


genericFoodImg = "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"


class FoodTruck(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, unique=True)
    address = models.TextField()
    coverImg = models.TextField(default=genericFoodImg)
    description = models.TextField()

    def __str__(self):
        return self.name


class FoodItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    foodtruck = models.ForeignKey(FoodTruck, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
