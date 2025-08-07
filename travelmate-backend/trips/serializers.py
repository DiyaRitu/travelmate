# trips/ serializers.py

from rest_framework import serializers
from .models import Trip

# Serializer for the trip model
class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__' # Include all fiels in API
        read_only_fields = ['user'] # User will be set automatically