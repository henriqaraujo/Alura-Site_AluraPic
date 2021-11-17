import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Photo} from "./photo";

const API = 'http://localhost:3000'
//Com o injectable, é possível que todo componente da aplicação consiga chamar o photoservice
@Injectable({providedIn: 'root'})
export class PhotoService {
    
    //Colocando private ou public o typeScript que vc nao quer apenas receber o parametro e tbm torna-la uma propriedade da classe.
    constructor(private http: HttpClient){}

    listFromUser(userName: string){
    //Me traga as informações desse link, nesse caso utilizamos o observable, mas apenas ele não basta tenho que nos inscrever utilizando
    //o subscription e assim conseguimos observar as informações.

    //http.get<Object[] - estamos falando, olha esses dados que vão ser capturado são objetos do tipo array
    return this.http.get<Photo[]>(API + '/' + userName + '/photos')
    
    }

    //Metodo de páginação.
    listFromUsePaginated(userName: string, page:number){
        
        const params = new HttpParams().append('page', page.toString())
        return this.http.get<Photo[]>(API + '/' + userName + '/photos', {params})
        
        }
}


