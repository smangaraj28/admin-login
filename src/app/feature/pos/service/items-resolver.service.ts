import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PosDbService} from './pos-db.service';
import {ItemsResolved} from '../model/item';

@Injectable({
    providedIn: 'root'
})
export class ItemsResolver implements Resolve<ItemsResolved> {

    constructor(private posDbService: PosDbService) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<ItemsResolved> {
        return this.posDbService.getItems()
            .pipe(
                map(item => ({food: item[`food`], drink: item[`drink`], error: null})),
                catchError(error => {
                    const message = `Retrieval error: ${error}`;
                    console.error(message);
                    return of({item: null, drink: null, error: message});
                })
            );
    }

}
