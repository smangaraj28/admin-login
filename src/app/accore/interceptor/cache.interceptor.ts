import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {HttpCacheService} from '../service/http-cache.service';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

    constructor(private httpCacheService: HttpCacheService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            console.log(`Invalidating Cache: ${req.method} ${req.url}`);
            this.httpCacheService.invalidateCache();
            return next.handle(req);
        }
        const cachedResponse: HttpResponse<any> = this.httpCacheService.get(req.url);
        if (cachedResponse) {
            console.log(`Returning A Cached Response: ${cachedResponse.url}`);
            console.log(cachedResponse.body);
            return of(cachedResponse);
        }
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log(`Adding Item To Cache ${req.url}`);
                    this.httpCacheService.put(req.url, event);
                }
            })
        );
    }
}
