import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


//Enrutador
import { RouterModule, Routes } from '@angular/router';
import { ClientService } from './clients/client.service';
import { FormComponent } from './clients/form.component';


const routes: Routes =[
  {path:'',redirectTo:'/clients', pathMatch:'full'},
  {path:'clients', component:ClientsComponent},
  {path:'clients/form', component:FormComponent},
  {path:'clients/form/:id', component:FormComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    FormComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
