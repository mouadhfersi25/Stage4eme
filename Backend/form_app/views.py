# backend/form_app/views.py
from rest_framework_mongoengine import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError
from .models_mongo import ContactForm, Newsletter
from .serializers import ContactFormSerializer, NewsletterSerializer

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

@api_view(['POST'])
def newsletter_subscribe(request):
    """
    Endpoint pour l'inscription à la newsletter.
    POST /api/newsletter/subscribe/
    """
    try:
        from pymongo import MongoClient
        from datetime import datetime
        
        email = request.data.get('email')
        
        if not email:
            return Response(
                {'email': ['Ce champ est requis.']}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Connexion directe à MongoDB avec PyMongo
        client = MongoClient('mongodb://localhost:27017/')
        db = client['stage_db']
        collection = db['newsletter_subscribers']
        
        # Vérifier si l'email existe déjà
        if collection.find_one({'email': email}):
            return Response(
                {'email': ['Cette adresse email est déjà inscrite à notre newsletter.']}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Créer un nouvel abonné
        newsletter_doc = {
            'email': email,
            'created_at': datetime.utcnow(),
            'is_active': 'active'
        }
        collection.insert_one(newsletter_doc)
        
        client.close()
        
        return Response(
            {'message': 'Inscription à la newsletter réussie !'}, 
            status=status.HTTP_201_CREATED
        )
        
    except Exception as e:
        return Response(
            {'error': f'Erreur interne du serveur: {str(e)}'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
