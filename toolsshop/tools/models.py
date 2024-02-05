from django.db import models
from django.urls import reverse


class Tool(models.Model):

	tool_type = models.CharField(max_length=30, db_index=True)
	model = models.CharField(max_length=30, db_index=True)
	manufacturer = models.CharField(max_length=30, db_index=True)
	price = models.IntegerField(db_index=True)

	class Meta:
	
		ordering = ('model',)
		verbose_name = 'tool'
		verbose_name_plural = 'tools'
	
	def __str__(self):
	
		return self.model
	
	def get_absolute_url(self):
	
		return reverse('tools:tool_detail', args=[self.id])




























