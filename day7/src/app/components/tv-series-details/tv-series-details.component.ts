import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { TVShow } from '../tv-list/TvShow';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-series-details',
  standalone: true,
  imports: [ CommonModule, NgClass ],
  templateUrl: './tv-series-details.component.html',
  styleUrl: './tv-series-details.component.css'
})
export class TvSeriesDetailsComponent {

  series!: any;
  id!: number;

  constructor(private tvService: TvService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.tvService.getSeriesByID(this.id).subscribe((response) => {
      console.log(response);
      
      this.series = response;
    });
  }
    
}