from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Project
from .serializers import ProjectSummarySerializer, ProjectDetailSerializer

@api_view(['GET'])
def project_list(request):
    """Returns a list of all projects with basic info."""
    projects = Project.objects.all()
    serializer = ProjectSummarySerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_detail(request, slug):
    """Returns detailed info about a specific project by slug name."""
    project = get_object_or_404(Project, slug=slug)
    serializer = ProjectDetailSerializer(project)
    return Response(serializer.data)