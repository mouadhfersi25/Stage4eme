from rest_framework_mongoengine import serializers
from .models_mongo import ContactForm, Newsletter

class ContactFormSerializer(serializers.DocumentSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'

class NewsletterSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Newsletter
        fields = ['email']
