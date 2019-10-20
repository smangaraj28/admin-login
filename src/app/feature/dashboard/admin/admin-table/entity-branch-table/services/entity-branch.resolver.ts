import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EntityBranch} from '../models/entity-branch';
import {Entity} from '../../entity-table/models/entity';
import {environment} from '../../../../../../../environments/environment';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EntityBranchResolver {
    constructor(private httpClient: HttpClient) {
    }

    resolve(): Observable<any> {
        return this.httpClient.get<EntityBranch[]>(environment['url_' + 'auth_signup'] + '/' + 'entitybranch');
        // return this.httpClient.get<EntityBranch[]>('/assets/entity-branch.json');
    }
}
