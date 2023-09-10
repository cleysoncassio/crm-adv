from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet
from. import views


router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('cadastrar/', views.cadastrar_cliente, name='cadastrar_cliente'),
    # path('clientes/', include('clientes.urls')),
]
