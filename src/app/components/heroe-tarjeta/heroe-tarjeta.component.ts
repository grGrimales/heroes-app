import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index: number;
  @Output() heroSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
   ) { 
     this.heroSeleccionado =  new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.heroSeleccionado.emit(this.index);

  }

}
