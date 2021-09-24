from django.core import exceptions
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from accounts.serializers import UserSerializer
from rest_framework import status
# Create your views here.

@api_view(['GET', 'POST'])
def user_register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
