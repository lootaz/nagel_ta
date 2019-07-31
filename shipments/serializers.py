from rest_framework import serializers

from shipments.models import Shipment


class ShipmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shipment
        fields = ['id', 'title', 'arrived_ts', 'weight_kg', 'from_country', 'to_country']
        extra_kwargs = {
            'id': {'read_only': True}
        }