from django.db import models

class Shipment(models.Model):
    title = models.CharField(max_length=255)
    arrived_ts = models.DateTimeField()
    weight_kg = models.IntegerField()
    from_country = models.CharField(max_length=255)
    to_country = models.CharField(max_length=255)

    class Meta:
        db_table = 'nagel_shipment'
