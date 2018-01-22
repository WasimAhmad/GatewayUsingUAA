import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    GatewayUsingUaaSharedLibsModule,
    GatewayUsingUaaSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        GatewayUsingUaaSharedLibsModule,
        GatewayUsingUaaSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        GatewayUsingUaaSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GatewayUsingUaaSharedModule {}
