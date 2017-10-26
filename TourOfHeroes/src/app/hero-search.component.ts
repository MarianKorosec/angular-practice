import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';

import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
        .debounceTime(300)        // wait 300 ms after every keystroke before considering the term
        .distinctUntilChanged()   // ignore if term hasn't changed
        .switchMap(term => term   // switch to a new observable each time the term changes
          ? this.heroSearchService.search(term) // return the search result observable
          : Observable.of<Hero[]>([]))  // return empty hero array if no search term
        .catch(error => {
          console.log(error);
          return Observable.of<Hero[]>([]);
        });
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
