# trips/views.py
from rest_framework import generics, permissions
from .models import Trip
from .serializers import TripSerializer

# Handles GET (list trips) and POST (create trip)
class TripListCreateView(generics.ListCreateAPIView):
    serializer_class = TripSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Return only trips of the logged-in user.
        """
        return Trip.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """
        Attach the logged-in user to the trip when creating.
        """
        serializer.save(user=self.request.user)


# Handles GET (retrieve one), PUT/PATCH (update), DELETE
class TripDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TripSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Only allow users to access their own trips.
        """
        return Trip.objects.filter(user=self.request.user)
