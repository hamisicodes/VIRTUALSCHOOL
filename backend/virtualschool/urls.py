from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include,re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('demo.urls', namespace='demo')),
    path('api/assignments/', include('assignment.assignments.urls')),
    path('api/graded_assignments/', include('assignment.graded_assignments.urls')),
    path('api/coursework/',include('coursework.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL , document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)
