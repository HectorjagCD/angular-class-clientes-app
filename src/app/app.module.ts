import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';

import { HttpClientModule } from '@angular/common/http';


//Enrutador
import { RouterModule, Routes } from '@angular/router';
import { ClientService } from './clients/client.service';


const routes: Routes =[
  {path:'',redirectTo:'/clients', pathMatch:'full'},
  {path:'clients', component:ClientsComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
