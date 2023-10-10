"""
URL configuration for web_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

from web_main import views as web_main_views

urlpatterns = [
    # ... (your other urls)
    path('', web_main_views.index, name='index'),
    path('research/', web_main_views.research, name='research'),
    path('software/', web_main_views.software, name='software'),
    path('teach_talks/', web_main_views.teach_talks, name='teach_talks'),
    path('videos/', web_main_views.videos, name='videos'),
    path('project/template_project/', web_main_views.template_project, name='template_project'),
]
