# trips/views.py

from rest_framework import generics, permissions
from .models import Trip
from .serializers import TripSerializer

#List trips of the logged-in user and allow creating new trips
class TripListCreateView(generics.ListCreateAPIView):
    serializer_class = TripSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Return only the trips created by the logged-in user
        return Trip.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # set the current user as the trip's user before saving
        serializer.save(user=self.request.user)

# view, update, or delete a single trip
class TripDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TripSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)