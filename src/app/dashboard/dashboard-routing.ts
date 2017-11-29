import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    {path: '', component:DashboardComponent , 
        children:[
            {path: 'home' , loadChildren:"./../home/home.module#HomeModule"},
        //     {path: 'providers' , loadChildren:"./../providers/providers.module#ProvidersModule"},
        //     {path: 'provider' , loadChildren:"./../outlet/outlet.module#OutletModule"}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
 
export const dashboardrouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);