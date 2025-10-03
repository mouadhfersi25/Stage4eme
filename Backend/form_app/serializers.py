from rest_framework_mongoengine import serializers
from .models_mongo import ContactForm

class ContactFormSerializer(serializers.DocumentSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'
