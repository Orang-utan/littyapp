
from django.urls import path
from . import api

# url end points for food trucks
urlpatterns = [
    path('api/foodtrucks/', api.FoodTrucks.as_view()),
    path('api/foodtrucks/<str:foodtruck_id>/', api.FoodTruckDetail.as_view()),
    path('api/foodtrucks/<str:foodtruck_id>/menu/', api.FoodItems.as_view()),
    path('api/foodtrucks/<str:foodtruck_id>/menu/<str:fooditem_id>/',
         api.FoodItemDetail.as_view()),
]
