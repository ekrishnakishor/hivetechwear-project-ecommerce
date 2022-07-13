from django.db import models
from cloudinary.models import CloudinaryField

class Category(models.Model):
    class Meta(object):
        db_table = 'category'
        verbose_name_plural = "Categories"

    name = models.CharField(
        'Name', blank=False, null=False, max_length=200, db_index=True
    )
    image = CloudinaryField(
        "Category Image", blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Creation Date', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Update Date', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name