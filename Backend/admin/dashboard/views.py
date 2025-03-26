from django.http import JsonResponse
from .models import UserProfile, Users, UserBlocklist

def get_all_users(request):
    # Fetch all users from the database
    users = Users.objects.all()
    data = []
    for user in users:
        # Get the user profile (if it exists)
        user_profile = UserProfile.objects.filter(user_id=user.id).first()
        
        # Check if the user is blacklisted
        is_blacklisted = UserBlocklist.objects.filter(user_id=user.id).exists()
        
        # Build the user data
        user_data = {
            'id': user.id,
            'username': user_profile.username if user_profile else None,
            'full_name': user_profile.display_name if user_profile else None,
            'bio': user_profile.bio if user_profile else None,
            'email': user.email,
            'blacklisted': is_blacklisted,
        }
        data.append(user_data)
    
    # Return the data as a JSON response
    return JsonResponse(data, safe=False)