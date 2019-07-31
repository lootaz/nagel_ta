import json
from urllib.parse import urlencode, urljoin

from django.test import TestCase, Client, RequestFactory
from django.urls import reverse

from shipments.models import Shipment


class ShipmentModelTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.factory = RequestFactory()
        self.exists_shipment = Shipment.objects.create(
            title="Exists Elephants Shipment",
            arrived_ts="2019-07-30T10:00:00Z",
            weight_kg=10,
            from_country="Russia",
            to_country="Estonia"
        )

        self.base_url = reverse('shipments-list')
        self.url_to_exists = reverse('shipments-detail', kwargs={'pk': self.exists_shipment.id})

        self.new_shipment_data = {
            "title": "New Bananas Shipment",
            "arrived_ts": "2019-07-30 07:00:00Z",
            "weight_kg": 15000,
            "from_country": "Estonia",
            "to_country": "Egypt"
        }

    def test_get_shipments(self):
        response = self.client.get(self.base_url)
        self.assertEquals(response.status_code, 200)

        response_json = response.json()
        self.assertEquals(len(response_json), 1)

        self.assertEquals(self.exists_shipment.title, response_json[0].get('title'))

    def test_create_shipment(self):
        response = self.client.post(self.base_url, json.dumps(self.new_shipment_data), content_type="application/json")
        self.assertEquals(response.status_code, 201)

        response = self.client.get(self.base_url)
        self.assertEquals(response.status_code, 200)

        response_json = response.json()
        self.assertEquals(len(response_json), 2)

    def test_delete_shipment(self):
        response = self.client.delete(self.url_to_exists)
        self.assertEquals(response.status_code, 204)

        response = self.client.get(self.base_url)
        self.assertEquals(response.status_code, 200)

        response_json = response.json()
        self.assertEquals(len(response_json), 0)

    def test_patch_shipment(self):
        TEST_WEIGHT = 4242
        new_weight_data = {'weight_kg': TEST_WEIGHT}

        response = self.client.patch(self.url_to_exists, json.dumps(new_weight_data), content_type='application/json')
        self.assertEquals(response.status_code, 200)

        response = self.client.get(self.url_to_exists)
        response_json = response.json()
        self.assertEquals(response_json.get('weight_kg'), TEST_WEIGHT)


    def test_put_shipment(self):
        response = self.client.put(self.url_to_exists, json.dumps(self.new_shipment_data), content_type='application/json')
        self.assertEquals(response.status_code, 200)

        response = self.client.get(self.url_to_exists)
        response_json = response.json()
        self.assertEquals(response_json.get('title'), self.new_shipment_data.get('title'))

    def test_search_by_shipment_title(self):
        search_request_data_0 = {'title': 'phan'}
        search_request_url_0 = urljoin(self.base_url, '?' + urlencode(search_request_data_0))

        response = self.client.get(search_request_url_0)
        self.assertEquals(response.status_code, 200)

        response_json = response.json()
        self.assertEquals(len(response_json), 1)

        search_request_data_1 = {'title': 'pineapple'}
        search_request_url_1 = urljoin(self.base_url, '?' + urlencode(search_request_data_1))

        response = self.client.get(search_request_url_1)
        self.assertEquals(response.status_code, 200)

        response_json = response.json()
        self.assertEquals(len(response_json), 0)
