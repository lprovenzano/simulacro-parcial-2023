import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paisactor',
  templateUrl: './paisactor.component.html',
  styleUrls: ['./paisactor.component.scss']
})
export class PaisactorComponent implements OnInit {

  @Input()
  actorSeleccionado:any;

  constructor() { }

  ngOnInit(): void {
  }

}
