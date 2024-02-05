from rest_framework import serializers
from tools.models import Tool



class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.tool_type = validated_data.get('tool_type', instance.tool_type)
        instance.model = validated_data.get('model', instance.model)
        instance.manufacturer = validated_data.get('manufacturer', instance.manufacturer)
        instance.price = validated_data.get('price', instance.price)
        instance.save()

        return instance


























