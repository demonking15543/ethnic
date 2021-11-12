from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.serializers import UserSerializer, MyTokenObtainPairSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny


# Create your views here.

from django.http import JsonResponse
from django.middleware.csrf import get_token

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})






@api_view(['GET', 'POST'])
def user_register(request):
    if request.method == 'POST':
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)








class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class HelloWorldView(APIView):
    permission_classes = [IsAuthenticated]


    def get(self, request):
        return Response(data={"hello":"world"}, status=status.HTTP_200_OK)






