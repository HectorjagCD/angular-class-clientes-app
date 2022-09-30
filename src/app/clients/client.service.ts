import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint:string='http://localhost:8276/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) {}

    getClients():Observable<Client[]>{

        return this.http.get<Client[]>(this.urlEndPoint);

    }
  }

