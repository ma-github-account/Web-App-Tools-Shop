from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from tools import urls as tools_urls
from api import urls as api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tools/', include(tools_urls)),
    path('api/', include(api_urls)),
]
