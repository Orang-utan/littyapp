from rest_framework import serializers
from . import models
import base64
from django.conf import settings
import os

# serializing food truck to transform model into json format


class FoodTruckSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FoodTruck
        fields = ['id', 'name', 'phone', 'address', 'description', 'coverImg']

# serializing food item to transform model into json format


class FoodItemSerializer(serializers.ModelSerializer):

    def create(self, validated_data):

        foodtruck = models.FoodTruck.objects.get(
            pk=validated_data['foodtruck_id'])
        validated_data['foodtruck'] = foodtruck
        foodItem = models.FoodItem.objects.create(**validated_data)

        return foodItem

    class Meta:
        model = models.FoodItem
        fields = ['id', 'name']
