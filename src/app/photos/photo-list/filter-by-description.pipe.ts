import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

//Name: definimos o nome do filtro do pipe
@Pipe({name: 'filterByDescription'})
//implements PipeTransform, implementamos o metodo transform que é responsavel por fazer a logica do pipe
export class FilterByDescription implements PipeTransform {

    //O Primeiro parametro é em que queremos aplicar a transformação ?
    //Segundo parametro definimos o tipo do parametro.
    transform(photos: Photo[], descriptionQuery: string) {
        //Retornamos o mesmo tipo de dados do photos: Photo[]
        //.trim() - removemos todos os espaços da string
        //.toLowerCase() - para deixar as letras minuscula
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){
            //Acessamos a lista de photos e para cada foto pegamos a description dela e transformamos em letra minuscula
            //E verificamos se dentro de filter tem a string pesquisada.
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery))
        }else {
            return photos;
        }
    }

}