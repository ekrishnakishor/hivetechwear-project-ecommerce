from django.db import models
from django.db.models.deletion import CASCADE
from apps.products.models import Product
from apps.orders.models import Order

from django.utils import timezone

class OrderItem(models.Model):
    class Meta(object):
        db_table = 'order_item'

    order = models.ForeignKey(
        Order, related_name='related_order', on_delete=CASCADE
    )
    product = models.ForeignKey(
        Product, related_name='related_order_item_product', on_delete=models.CASCADE
    )
    qty = models.IntegerField(
        'Quantity', blank=False, null=False
    )
    created_at = models.DateTimeField(
        'Creation Date', blank=True, default=timezone.now
    )