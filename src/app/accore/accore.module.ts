import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {ApiService} from './apiservice/api.service';
import {AddHeaderInterceptor} from './interceptor/add-header.interceptor';
import {FireauthService} from './fireauth/fireauth.service';
import {AnalyticsService} from './analytics/analytics.service';
import {GenauthService} from './genauth/genauth.service';
import {environment} from '../../environments/environment';
import {LogResponseInterceptor} from './interceptor/log-response.interceptor';
import {CacheInterceptor} from './interceptor/cache.interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    declarations: [],
    providers: [
        ApiService,
        AddHeaderInterceptor,
        {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
        FireauthService,
        AnalyticsService,
        GenauthService
    ]
})
export class AccoreModule {
}
