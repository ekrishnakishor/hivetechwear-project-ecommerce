from django.contrib import admin

from apps.orders.models import Order

@admin.register(Order)
class OrderModel(admin.ModelAdmin):
    fields = ['user', 'customer_name', 'customer_phone', 'address', 'pin_code', 'building_type', 'city', 'state', 'total_price', 'total_qty']
    list_filter = []
    list_display = fields
    search_fields = ['user']