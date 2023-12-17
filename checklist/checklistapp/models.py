from django.db import models

# Create your models here.
from django.conf import settings
from django.db import models

# Create your models here.
class Task(models.Model):

    task_name = models.CharField(max_length=100)
    time= models.TimeField(auto_now_add=True)


    def __str__(self):
        return self.task_name
