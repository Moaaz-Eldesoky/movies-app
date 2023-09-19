import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url:string = 'https://fakestoreapi.com';

  constructor(private _HttpClient: HttpClient) {}

  registerUser(user:any){
    return this._HttpClient.post(`${this.api_url}/users`, user)
  }
  loginUser(credentials:any){
    return this._HttpClient.post(`${this.api_url}/auth/login`, credentials);
  }
  userData(id:string){
    return this._HttpClient.get(`${this.api_url}/users/${id}`)
  }
}
