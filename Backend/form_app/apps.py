from django.apps import AppConfig
from django.conf import settings
from mongoengine import connect

class FormAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'form_app'

    def ready(self):
        """
        Cette méthode est exécutée quand Django démarre.
        Elle initialise la connexion MongoDB via mongoengine
        en utilisant la configuration définie dans settings.py
        """
        cfg = getattr(settings, "MONGODB_SETTINGS", None)
        if cfg:
            connect(
                db=cfg.get("db"),
                host=cfg.get("host"),
                username=cfg.get("username"),
                password=cfg.get("password"),
                alias="default"
            )
