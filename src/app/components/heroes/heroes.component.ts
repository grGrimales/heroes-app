import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroeService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor(
    private _heroesService: HeroeService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(id: number) {
    console.log(id);
    this.router.navigate(['/heroe', id]);

  }





}
