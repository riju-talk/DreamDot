from django.http import JsonResponse

# Create your views here.
def users(request):
    return JsonResponse({'users': 'dummy data'})
