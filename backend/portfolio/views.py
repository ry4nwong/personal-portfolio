from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Project, Experience
from .serializers import ProjectSummarySerializer, ProjectDetailSerializer, ExperienceSummarySerializer, ExperienceDetailSerializer

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

@api_view(['GET'])
def experience_list(request):
    """Returns a list of all experience with basic info."""
    experiences = Experience.objects.all()
    serializer = ExperienceSummarySerializer(experiences, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def experience_detail(request, slug):
    """Returns detailed info about a specific experience by slug name."""
    experience = get_object_or_404(Experience, slug=slug)
    serializer = ExperienceDetailSerializer(experience)
    return Response(serializer.data)