import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LocalProvider implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req2 = req.clone({
      url: `http://localhost:3000${req.url}`
    });
    return next.handle(req2);
  }
}
