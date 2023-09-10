from django.http import HttpResponseNotFound
from rest_framework import viewsets
from .models import Cliente
from .serializers import ClienteSerializer
from .forms import ClienteForm
from django.shortcuts import render, redirect

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

def cadastrar_cliente(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_clientes')  # Redirecionar para a lista de clientes após o cadastro
    else:
        form = ClienteForm()
    return render(request, 'clientes/cadastrar_cliente.html', {'form': form})

def clientes_view(request):
    return HttpResponseNotFound('A página que você está procurando não existe.')