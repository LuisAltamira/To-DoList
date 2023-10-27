from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import TodoModelViewSet


router = SimpleRouter()
router.register(r'todos', TodoModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


