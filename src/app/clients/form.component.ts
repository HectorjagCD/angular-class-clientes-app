import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  client:Client = new Client();
  title:string = 'Formulario del Cliente';
  errors:string[];

  constructor(private clientservice:ClientService,private router:Router) { }  //Cómo el @AutoWired de Spring

  ngOnInit(): void {
  }

  public create():void{

    this.clientservice.create(this.client).subscribe(
      response=>{
        this.router.navigate(['/clients'])

      },
      err=>{
        this.errors= err.error.errors as string[];
        console.error(err.status);
        console.error(this.errors);
      }


    )

  }

}
