from .models import UserRecord
from rest_framework import serializers


class UserRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecord
        fields = '__all__'

