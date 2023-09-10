from django.urls import path
from .views import ApiListCreateView, ApiRetrieveUpdateDeleteView

urlpatterns = [
    path('', ApiListCreateView.as_view(), name='api-list-create'),
    path('api/<int:pk>/', ApiRetrieveUpdateDeleteView.as_view(), name='api-retrieve-update-delete'),
]
