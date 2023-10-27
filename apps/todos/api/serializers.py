from rest_framework import serializers

from ..models import Todo


class TodoModelSerializer(serializers.ModelSerializer):
    """ Model Serializer for Todo. """

    class Meta:
        """ Meta definition for Todo """

        model = Todo
        fields = (
            'uuid',
            'name',
            'completed'
        )
