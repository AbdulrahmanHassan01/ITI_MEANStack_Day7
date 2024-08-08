import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { TvSeriesDetailsComponent } from './components/tv-series-details/tv-series-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tv', component: TvListComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'details/:id', component: TvSeriesDetailsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: '**', component: PageNotFoundComponent },
];
