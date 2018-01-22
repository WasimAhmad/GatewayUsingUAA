import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { GatewayUsingUaaSharedModule, UserRouteAccessService } from './shared';
import { GatewayUsingUaaAppRoutingModule} from './app-routing.module';
import { GatewayUsingUaaHomeModule } from './home/home.module';
import { GatewayUsingUaaAdminModule } from './admin/admin.module';
import { GatewayUsingUaaEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        GatewayUsingUaaAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GatewayUsingUaaSharedModule,
        GatewayUsingUaaHomeModule,
        GatewayUsingUaaAdminModule,
        GatewayUsingUaaEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class GatewayUsingUaaAppModule {}
