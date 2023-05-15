import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculasactor',
  templateUrl: './peliculasactor.component.html',
  styleUrls: ['./peliculasactor.component.scss']
})
export class PeliculasactorComponent implements OnInit {

  @Input()
  peliculasActor:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
