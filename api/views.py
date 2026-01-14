from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserRecord
from .serializers import UserRecordSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def user_record(request):
    if request.method == 'POST':
        serializer=UserRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        records = UserRecord.objects.all()
        serializer = UserRecordSerializer(records, many=True)
        return Response(serializer.data)

