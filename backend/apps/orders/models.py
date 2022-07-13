from django.db import models
from apps.users.models import User
from django.utils import timezone

class Order(models.Model):
    class Meta(object):
        db_table = 'order'
    
    user = models.ForeignKey(
        User, related_name='related_order_user', on_delete=models.CASCADE
    )
    customer_name = models.CharField(
        'Customer Name', blank=False, null=False, max_length=255
    )
    customer_phone = models.CharField(
        'Customer Phone', blank=False, null=False, max_length=255
    )
    address = models.CharField(
        'Address', blank=False, null=False, max_length=255
    )
    pin_code = models.CharField(
        'Pin Code', blank=False, null=False, max_length=255
    )
    building_type = models.CharField(
        'Building Type', blank=True, null=True, max_length=255
    )
    city = models.CharField(
        'City', blank=False, null=False, max_length=255
    )
    state = models.CharField(
        'State', blank=False, null=False, max_length=255
    )
    total_price = models.FloatField(
        'Total Price', blank=False, null=False
    )
    total_qty = models.IntegerField(
        'Total Quantity', blank=False, null=False
    )
    created_at = models.DateTimeField(
        'Creation Date', blank=True, default=timezone.now
    )

    @property
    def order_items(self):
        return self.related_order.all()