from django.shortcuts import render
from .models import VisitorCount

def update_and_get_count(page_name):
    obj, created = VisitorCount.objects.get_or_create(page=page_name)
    obj.count += 1
    obj.save()
    return obj.count

# Main pages
def index(request):
    count = update_and_get_count('index')
    return render(request, 'index.html', {'visitor_count': count})

def research(request):
    count = update_and_get_count('research')
    return render(request, 'research.html', {'visitor_count': count})

def software(request):
    count = update_and_get_count('software')
    return render(request, 'software.html', {'visitor_count': count})

def teach_talks(request):
    count = update_and_get_count('teach_talks')
    return render(request, 'teach_talks.html', {'visitor_count': count})

def videos(request):
    count = update_and_get_count('videos')
    return render(request, 'videos.html', {'visitor_count': count})

# Subfolder project pages
def template_project(request):
    count = update_and_get_count('template_project')
    return render(request, 'project/template_project.html', {'visitor_count': count})

