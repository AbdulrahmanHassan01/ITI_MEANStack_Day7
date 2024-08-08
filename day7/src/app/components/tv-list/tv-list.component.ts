import { Component, OnDestroy, OnInit } from '@angular/core';
import { TVShow } from './TvShow';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TvService } from '../../services/tv.service';
import { CommonModule } from '@angular/common';
import { DatePipe, UpperCasePipe } from '@angular/common'; 
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [ RouterModule, CommonModule, NgClass ],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})

export class TvListComponent implements OnInit, OnDestroy{
  allSeries: TVShow[] = [];
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  constructor(private tvService: TvService) { 
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.tvService.getTvList(newPage)
        .subscribe((response) => {
          console.log(response);
          this.allSeries = response.results
          this.page = response.page;
          this.totalPages = response.total_pages;
        });
    });
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.currentPage.next(--this.page);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
