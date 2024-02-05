from django.shortcuts import render, get_object_or_404
from .models import Tool


def tools_list(request):
	
	tool = None
	tools = Tool.objects.all()
	return render(request, 'tools/tool/list.html', {'tool': tool, 'tools': tools})

def tool_detail(request, id):

	tool = get_object_or_404(Tool, id=id)
	return render(request, 'tools/tool/detail.html', {'tool': tool})










