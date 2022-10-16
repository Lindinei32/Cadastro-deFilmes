import { formatDate } from '@angular/common';
import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/Filme';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  public filmeForm: FormGroup;

  public filmeSelecionado : Filme;

  public titulo = 'Filmes';

  public filmes = [


  { id : 1, nome :'a', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },
  { id : 2, nome :'b', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },
  { id : 3, nome :'c', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },
  { id : 4, nome :'d', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },
  { id : 5, nome :'e', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },
  { id : 6, nome :'f', data: '13-08-1980' ,genero : 'Terror', diretor : 'Pedro', listaatores:'Maria', },

  ];
  

  constructor(private fb: FormBuilder) {

    this.criarForm();

  }

  ngOnInit(): void {
  }


  criarForm (){

    this.filmeForm = this.fb.group({

      nome : ['',Validators.required],
      data: ['', Validators.required],
      genero : ['',Validators.required],
      diretor : ['', Validators.required],
      listaatores : ['']

    });

  }


  filmeSubmit(){
    console.log(this.filmeForm.value);
  }

  filmesSelected(filme: Filme){
    this.filmeSelecionado = filme;
    this.filmeForm.patchValue(filme);
  };

  voltar(){
    this.filmeSelecionado = null;
  };



}
