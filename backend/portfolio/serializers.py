from rest_framework import serializers
from .models import Project, StackItem, SummarySection

class StackItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = StackItem
        fields = ['name', 'icon']

class ProjectSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'slug', 'start_date', 'end_date', 'header', 'github_url']

class ProjectDetailSerializer(serializers.ModelSerializer):
    stack = StackItemSerializer(many=True)
    class Meta:
        model = Project
        fields = '__all__'

class SummarySectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummarySection
        fields = '__all__'