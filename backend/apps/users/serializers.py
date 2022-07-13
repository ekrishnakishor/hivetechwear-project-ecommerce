from .models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from secrets import token_hex
import datetime

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'token', 'token_expires')

class UserSignUpSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    token = serializers.CharField(read_only=True)
    token_expires = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'token', 'token_expires')

    # Overide the create method
    def create(self, validate_data):

        if User.objects.filter(email=validate_data['email']).exists():
            raise serializers.ValidationError({'email':['This email is already taken.']})

        # Encrypt the password
        validate_data['password'] = make_password(validate_data['password'])

        # Create a token
        validate_data['token'] = token_hex(30)
        validate_data['token_expires'] = datetime.datetime.now() + datetime.timedelta(days=7)

        return super().create(validate_data)


class UserSignInSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    name = serializers.CharField(read_only=True)
    token = serializers.CharField(read_only=True)
    token_expires = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'token', 'token_expires')

    # Override the create method
    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email'])
        # Check the password
        if len(user) > 0 and check_password(validated_data['password'], user[0].password):
            # Token
            user[0].token = token_hex(30)
            # Token expires after 7 days
            user[0].token_expires = datetime.datetime.now() + datetime.timedelta(days=7)
            user[0].save()

            # Return user information
            return user[0]
        else:
            # Raise error
            raise serializers.ValidationError({"error": "The password or email is incorrect."})
