import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {Client} from './client';
import {catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint:string='http://localhost:8276/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient, private router:Router) {}

    getClients():Observable<Client[]>{

        return this.http.get<Client[]>(this.urlEndPoint);

    }

    create(client:Client):Observable<any> {

      return this.http.post(this.urlEndPoint,client,{headers:this.httpHeaders}).pipe( // <--- llamada a la API REST
        catchError(
          e => {
            // if (e.status==400) {
            //   return throwError(()=>e)
            // }
            return throwError(()=>e)
          }
        )
      )

    }

    getClient(id:number):Observable<Client>{
      return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(
        catchError(
          e => {
            this.router.navigate(['/clients']);
            console.error(e.error.errors);
            return throwError(()=>e);
          }
        )
      )

    }

    updateClient(client:Client):Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/${client.id}`, client, {headers:this.httpHeaders})
      .pipe( catchError(
         e => { return throwError(() => e)  }  ))
    }




  }

