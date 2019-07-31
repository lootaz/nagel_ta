from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter

from shipments import views

router = DefaultRouter()
router.register('shipments', views.ShipmentViewSet, basename='shipments')

urlpatterns = [
    url(r'api/', include(router.urls)),
    url(r'^$', views.index, name='index')
]