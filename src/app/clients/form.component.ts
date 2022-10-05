import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  client:Client = new Client();
  title:string = 'Formulario del Cliente';
  errors:string[];

  constructor(private clientservice:ClientService,private router:Router, private activeRoute: ActivatedRoute) { }  //Cómo el @AutoWired de Spring

  ngOnInit(): void {
    this.getClient();
  }

  public create():void{

    this.clientservice.create(this.client).subscribe(
      response=>{
        this.router.navigate(['/clients'])
        swal.fire('Nuevo cliente',`${response.message}: ${response.Cliente.name}`,'success');


      },
      err=>{
        this.errors= err.error.errors as string[];
        console.error(err.status);
        console.error(this.errors);
      }


    )

  }

  public getClient():void{
    this.activeRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.clientservice.getClient(id).subscribe(client => this.client= client)
      }

    }

    )

  }

  public updateClient():void {
    this.clientservice.updateClient(this.client).subscribe(
      response => {

        this.router.navigate(['/clients']);
        swal.fire('Cliente actualizado', `${response.message}: ${response.Cliente.name}`, 'success');

      },

      err => {

      this.errors = err.error.errors as string[];
      console.error(err.status);
      console.error(this.errors);

    }


    )


  }

}
