import { Component, OnInit, Input } from '@angular/core';
import { Hero} from '../hero';

import { HeroService } from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    // Holds info about the route in this instance of the component. interested in the route's parameters extracted from the URL
    private heroService: HeroService,
    private location: Location
    // Angular service interacting with browser. Used later ot navigate back to view that navigated here
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
