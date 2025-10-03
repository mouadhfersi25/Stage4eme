from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),           # garde-le si tu utilises encore l'admin
    path('api/form/', include('form_app.urls')),
]
