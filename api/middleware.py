from datetime import datetime

class RequestLogMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print(
            f"[MIDDLEWARE] {datetime.now()} | "                                                                                                                                                                                                                                                                                                                 
            f"{request.method} | {request.path}"
        )

        response = self.get_response(request)

        response['X-CLIENT-TYPE'] = 'Angular-App'
        return response
