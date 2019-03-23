import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar componente para formulario
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//importar rutas 
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    UsersComponent,
    ExpensesComponent,
    ReportsComponent,
    SmallBoxComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //completamos la importacion ,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
