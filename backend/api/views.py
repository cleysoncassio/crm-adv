from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Api
from .serializers import ApiSerializer

class ApiListCreateView(ListCreateAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer

class ApiRetrieveUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer
