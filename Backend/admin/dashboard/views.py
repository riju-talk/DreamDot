from django.http import JsonResponse
from django.utils.timezone import now
from rest_framework.decorators import api_view  # 🔥 THIS IS THE MISSING IMPORT
from rest_framework.response import Response
from rest_framework import status
import uuid

from .models import UserProfile, Users, UserBlocklist


def get_all_users(request):
    users = Users.objects.all()
    data = []

    for user in users:
        user_profile = UserProfile.objects.filter(user_id=user.id).first()
        is_blacklisted = UserBlocklist.objects.filter(user_id=user.id).exists()

        user_data = {
            'id': user.id,
            'username': user_profile.username if user_profile else None,
            'full_name': user_profile.display_name if user_profile else None,
            'bio': user_profile.bio if user_profile else None,
            'email': user.email,
            'blacklisted': is_blacklisted,
            'user_type': user.user_type,
        }
        data.append(user_data)

    return JsonResponse(data, safe=False)


def get_all_blacklisted_users(request):
    blacklisted_entries = UserBlocklist.objects.all()
    data = []

    for entry in blacklisted_entries:
        try:
            user = Users.objects.get(id=entry.user_id)
        except Users.DoesNotExist:
            continue

        user_profile = UserProfile.objects.filter(user_id=user.id).first()

        user_data = {
            'user_id': user.id,
            'username': user_profile.username if user_profile else None,
            'full_name': user_profile.display_name if user_profile else None,
            'bio': user_profile.bio if user_profile else None,
            'email': user.email,
            'is_active': user.is_active,
            'date_joined': user.created_at,
        }

        data.append(user_data)

    return JsonResponse(data, safe=False)


@api_view(['POST'])
def block_user(request):
    try:
        user_id = request.data.get('user_id')
        reason = request.data.get('reason', 'you have been reported and blocked by admins')

        UserBlocklist.objects.create(
            block_id=uuid.uuid4(),
            user_id=user_id,
            blocked_at=now()
        )
        return Response({'message': 'User blocked successfully'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def unblock_user(request):
    try:
        user_id = request.data.get('user_id')

        block_entry = UserBlocklist.objects.filter(user_id=user_id).first()
        if block_entry:
            block_entry.delete()
            return Response({'message': 'User unblocked successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'User not found in blocklist'}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def make_creator(request):
    try:
        user_id = request.data.get('user_id')
        # Ensure you filter on the correct field (assuming 'id' is the primary key)
        Users.objects.filter(id=user_id).update(user_type='creator')
        return Response({'message': 'User is now a creator.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def revoke_creator(request):
    try:
        user_id = request.data.get('user_id')
        # Update user_type to 'user' (or whatever the default should be)
        Users.objects.filter(id=user_id).update(user_type='user')
        return Response({'message': 'Creator is now a user.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
