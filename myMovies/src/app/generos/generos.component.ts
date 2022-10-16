import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  titulo = 'Gêneros';

  public generos = [


    { id : 1, nome :'Ação '},
    { id : 2, nome :'Aventura'},
    { id : 3, nome :'Comédia'},
    { id : 4, nome :'Terror'},
    { id : 5, nome :'SCI-FI'},
    { id : 6, nome :'DRAMA'},



    ];


  constructor() { }

  ngOnInit() {
  }

}
