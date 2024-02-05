from django.shortcuts import render
from tools.models import Tool
from .serializers import ToolSerializer
from rest_framework import viewsets, filters




class ToolsViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer






















