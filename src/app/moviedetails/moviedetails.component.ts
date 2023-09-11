import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  id:string="";
  imagePrefix:string = "https://image.tmdb.org/t/p/w500";
  movieDetails:any=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
  }
ngOnInit(){
  this.id= this._ActivatedRoute.snapshot.params['id'];
  this._MoviesService.getMovieDetails(this.id).subscribe((res)=>{
  this.movieDetails = res;
  console.log("mo3az"+JSON.stringify(this.movieDetails));
  })
}
}
