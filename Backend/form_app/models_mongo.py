# backend/form_app/models_mongo.py
from mongoengine import Document, StringField, EmailField, DateTimeField
from datetime import datetime

class ContactForm(Document):
    meta = {
        "collection": "contact_forms",
        "ordering": ["-timestamp"]
    }

    full_name = StringField(required=True, max_length=255)
    email_address = EmailField(required=True)
    company_name = StringField(max_length=255)
    country = StringField(max_length=100)
    phone_number = StringField(max_length=50)   # optionnel
    subject = StringField(max_length=100)
    message = StringField()
    contact_time = StringField(default='anytime')  # morning/afternoon/anytime
    timestamp = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return f"{self.full_name} - {self.timestamp}"

class Newsletter(Document):
    meta = {
        "collection": "newsletter_subscribers",
        "ordering": ["-created_at"]
    }

    email = EmailField(required=True, unique=True)
    created_at = DateTimeField(default=datetime.utcnow)
    is_active = StringField(default='active')  # active/inactive

    def __str__(self):
        return f"{self.email} - {self.created_at}"