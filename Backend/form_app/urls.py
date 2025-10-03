from rest_framework.routers import DefaultRouter
from .views import ContactFormViewSet

router = DefaultRouter()
router.register(r'contacts', ContactFormViewSet, basename='contacts')

urlpatterns = router.urls
