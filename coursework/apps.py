from django.apps import AppConfig


class CourseworkConfig(AppConfig):
    name = 'coursework'

    def ready(self):
        import coursework.signals
