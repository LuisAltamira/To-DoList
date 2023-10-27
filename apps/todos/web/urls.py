from django.urls import path

from .views import TodosTemplateView


urlpatterns = [
    path('', TodosTemplateView.as_view())
]