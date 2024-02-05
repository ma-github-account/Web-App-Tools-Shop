from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


app_name = 'tools'
urlpatterns = [

	path('', views.tools_list, name='tools_list'),
	path('<int:id>/', views.tool_detail, name='tool_detail')

]

if settings.DEBUG:
	
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




















