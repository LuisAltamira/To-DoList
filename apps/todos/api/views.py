from rest_framework.viewsets import ModelViewSet

from ..models import Todo
from .serializers import TodoModelSerializer


class TodoModelViewSet(ModelViewSet):
    """ ModelViewSet for view, read, editing and delete the Tasks. """

    # Create view to see list of tasks
    # Create view to delete tasks of list
    # Create view to read a task
    # Create view to update a task
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
