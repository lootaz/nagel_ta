from django.shortcuts import render
from rest_framework import viewsets, generics

from shipments.models import Shipment
from shipments.serializers import ShipmentSerializer


class ShipmentViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = Shipment.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)

        return queryset

    serializer_class = ShipmentSerializer


def index(request):
    shipments = Shipment.objects.all()
    context = {
        'shipments': shipments
    }
    return render(request, "shipments/index.html", context)