from django.shortcuts import render

# serving static index.html, with React injected into it


def index(request):
    return render(request, 'frontend/index.html')
