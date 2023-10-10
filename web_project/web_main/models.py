from django.db import models

# Create your models here.
class VisitorCount(models.Model):
    class Meta:
        app_label = 'web_main'
    page = models.CharField(max_length=255, unique=True)
    count = models.IntegerField(default=0)