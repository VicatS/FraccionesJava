import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';

//Rutas
const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'small-box', component: SmallBoxComponent },
    { path: 'users', component: UsersComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'roles', component: RolesComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);