import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePrefix:string = "https://image.tmdb.org/t/p/w500";
  @Input() c_trendingMovies:any = [];

  ngOnInit(): void {

  }
}
