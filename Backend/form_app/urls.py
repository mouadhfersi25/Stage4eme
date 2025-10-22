from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import ContactFormViewSet, newsletter_subscribe

router = DefaultRouter()
router.register(r'contacts', ContactFormViewSet, basename='contacts')

urlpatterns = [
    path('newsletter/subscribe/', newsletter_subscribe, name='newsletter-subscribe'),
] + router.urls
