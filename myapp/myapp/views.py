from django.shortcuts import render

def index(request):
	return render(request, 'index.html')

def page2(request):
    return render(request, 'page2.html')

def page1(request):
    return render(request, 'page1.html')

def page3(request):
    return render(request, 'page3.html')

def page4(request):
    return render(request, 'page4.html')

def page5(request):
    return render(request, 'page5.html')
