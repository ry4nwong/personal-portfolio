from django.db import models

class StackItem(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    icon = models.CharField(max_length=30, default="")

    def __str__(self):
        return self.name
    
class Experience(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False)
    slug = models.SlugField(max_length=50, unique=True, blank=False, default=id)
    icon = models.CharField(max_length=30, default="")
    start_date = models.DateField(blank=False)
    end_date = models.DateField(null=True, blank=True)
    header = models.TextField(default="No header yet")
    description = models.TextField(default="No description yet")
    stack = models.ManyToManyField(StackItem, related_name="experiences")

    def __str__(self):
        return self.name

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False)
    slug = models.SlugField(max_length=50, unique=True, blank=False, default=id)
    start_date = models.DateField(blank=False)
    end_date = models.DateField(null=True, blank=True)
    stack = models.ManyToManyField(StackItem, related_name="projects")
    header = models.TextField(default="No header yet")
    description = models.TextField(default="No description yet")
    github_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class SummarySection(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description = models.TextField(default="No description yet")
    display_order = models.IntegerField(unique=True)

    def __str__(self):
        return self.title