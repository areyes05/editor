import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {getConditions, postConditions, putConditions} from './conditions';

export class FakeBackendProvider implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const handleRoute = () => {
      switch (req.method) {
        case 'GET': return this._handleCall(getConditions, next, req);
        case 'POST': return this._handleCall(postConditions, next, req);
        case 'PUT': return this._handleCall(putConditions, next, req);
        default: return next.handle(req);
      }
    };
    return of(null).pipe(handleRoute);
  }

  private _handleCall(conditions: any[], next: HttpHandler, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    for (const cond of conditions) {
      if (cond.condition(request.urlWithParams)) {
        return cond.func(request);
      }
    }
    return next.handle(request);
  }
}
