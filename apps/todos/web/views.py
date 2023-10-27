from django.views.generic import TemplateView


class TodosTemplateView(TemplateView):
    """ TemplateView """
    
    template_name = "todos/todos_list.html"