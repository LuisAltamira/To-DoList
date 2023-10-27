import uuid

from django.db import models


class Todo(models.Model):
    """ Model definition for Todo. """

    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False, db_index=True)
    name = models.CharField('Nombre', max_length=50)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """ Meta definition for Todo. """

        verbose_name = 'Tareas'
        verbose_name_plural = 'Tareas'

    def __str__(self):
        """ Unicode representation of Todo. """
        return self.name
