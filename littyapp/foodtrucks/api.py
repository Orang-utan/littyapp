from rest_framework.views import APIView
from rest_framework.response import Response
from . import serializers
from .models import FoodTruck, FoodItem
from django.http import Http404
from rest_framework import status


class FoodTrucks(APIView):

    def get(self, request):
        foodtrucks = FoodTruck.objects.all()
        serializer = serializers.FoodTruckSerializer(foodtrucks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = serializers.FoodTruckSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FoodTruckDetail(APIView):

    def get(self, request, foodtruck_id):
        try:
            foodtruck = FoodTruck.objects.get(pk=foodtruck_id)
        except FoodTruck.DoesNotExist:
            raise Http404
        serializer = serializers.FoodTruckSerializer(foodtruck)
        return Response(serializer.data)

    def delete(self, request, foodtruck_id):
        try:
            foodtruck = FoodTruck.objects.get(pk=foodtruck_id)
        except FoodTruck.DoesNotExist:
            raise Http404
        foodtruck.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class FoodItems(APIView):

    def get(self, request, foodtruck_id):
        fooditems = FoodItem.objects.filter(foodtruck_id=foodtruck_id)
        serializer = serializers.FoodItemSerializer(fooditems, many=True)
        return Response(serializer.data)

    def post(self, request, foodtruck_id):
        try:
            FoodTruck.objects.get(pk=foodtruck_id)
        except FoodTruck.DoesNotExist:
            raise Http404

        serializer = serializers.FoodItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(foodtruck_id=foodtruck_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FoodItemDetail(APIView):

    def get(self, request, foodtruck_id, fooditem_id):
        try:
            fooditem = FoodItem.objects.get(
                foodtruck_id=foodtruck_id, pk=fooditem_id)
        except FoodItem.DoesNotExist:
            raise Http404
        serializer = serializers.FoodItemSerializer(fooditem)
        return Response(serializer.data)

    def delete(self, request, foodtruck_id, fooditem_id):
        try:
            fooditem = FoodItem.objects.get(
                foodtruck_id=foodtruck_id, pk=fooditem_id)
        except FoodItem.DoesNotExist:
            raise Http404
        fooditem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
