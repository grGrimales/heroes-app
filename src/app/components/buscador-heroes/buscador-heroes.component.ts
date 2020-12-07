import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador-heroes',
  templateUrl: './buscador-heroes.component.html',
  styles: [
  ]
})
export class BuscadorHeroesComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
    private activateRouter: ActivatedRoute,
    private _heoresServices: HeroeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activateRouter.params.subscribe(params => {
      // console.log(params['termino']);
      this.termino = params['termino']
      this.heroes = this._heoresServices.buscarHeroes(this.termino);
      console.table(this.heroes);

    });
  }

  
  verHeroe(id: number) {
    console.log(id);
    this.router.navigate(['/heroe', id]);

  }

}
