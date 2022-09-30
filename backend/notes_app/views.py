from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from .serializers import NoteSerializer
from .models import Note

class NoteViewSet(ModelViewSet):
    search_fields = ['title', 'created', 'updated']
    filter_backends = (filters.SearchFilter,)
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
