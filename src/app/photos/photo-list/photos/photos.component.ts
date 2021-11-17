import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  //Aqui exportamos as fotos da API
  @Input() photos: Photo[] = [];

  //Lista de dados criada, não temos um tipo definido de dados então colocamos ANY
  rows: any [] = [];
  constructor() { }

  //OnChanges recebe todas as mudanças das Inboading propety do componente
  ngOnChanges(changes: SimpleChanges) {
    //Houve alguma mudança em photos?, adiciona dinamicamente uma propriedade com o mesmo nome da Inboading propety que sofreu a mudança
    if(changes.photos)
    //This.rows recebe o resultado de groupColumns, esse metodo(groupColumns) recebe a lista de fotos.
    this.rows = this.groupColumns(this.photos);
  }

  //metodo para receber as fotos e pular em 3 em 3
  groupColumns(photos: Photo[]){
    const newRows = [];
    for(let index = 0; index < photos.length; index+=3){
      //Inserimos um valor dentro de newRows, que é o resultado de photos
      newRows.push(photos.slice(index, index+3));
    }
    return newRows;
  }

}
