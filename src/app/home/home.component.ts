import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any= [];
  trendingTV:any= [];
  trendingPeople:any= [];
  imagePrefix:string = "https://image.tmdb.org/t/p/w500";
constructor(private _MoviesService:MoviesService){
}
ngOnInit(): void {
    this._MoviesService.getMoviesList('movie').subscribe((res)=>{
      this.trendingMovies = res.results.slice(0,10);
    })

    this._MoviesService.getMoviesList('tv').subscribe((res)=>{
      this.trendingTV = res.results.slice(0,10);
    })

    this._MoviesService.getMoviesList('person').subscribe((res)=>{
      this.trendingPeople = res.results.slice(0,10);
      console.log(this.trendingPeople);
    })
}
}
