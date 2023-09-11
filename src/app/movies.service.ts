import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) {}
  getMoviesList(mediaType:string):Observable<any>{
    {
      const apiKey = 'f756cea9d43b34a22be30e61cd5275c3';
      const url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}`;
      return this._HttpClient.get(url);
    }
  }
}
