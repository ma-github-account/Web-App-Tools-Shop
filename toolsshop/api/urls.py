from django.urls import include, path, re_path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'tools', views.ToolsViewSet, basename="tools")

urlpatterns = [
    re_path(r'^', include(router.urls)), 
]































