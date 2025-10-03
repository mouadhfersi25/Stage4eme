# backend/form_app/views.py
from rest_framework_mongoengine import viewsets
from .models_mongo import ContactForm
from .serializers import ContactFormSerializer

class ContactFormViewSet(viewsets.ModelViewSet):
    """
    CRUD complet sur MongoDB (collection 'contact_forms').
    Endpoints fournis automatiquement par le router :
      - GET    /contacts/
      - POST   /contacts/
      - GET    /contacts/{id}/
      - PUT    /contacts/{id}/
      - PATCH  /contacts/{id}/
      - DELETE /contacts/{id}/
    """
    lookup_field = "id"  # gère l'ObjectId Mongo
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
