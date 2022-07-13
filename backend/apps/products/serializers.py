from .models import Product
from rest_framework import serializers
from cloudinary.models import CloudinaryField
from apps.categories.serializers import CategorySerializer

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)
    category = CategorySerializer(many=False, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
        depth = 1
        