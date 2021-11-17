import {Injectable} from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService} from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable({providedIn: 'root'})
//implements Resolve<Observable<Photo[]> - Estamos dizendo que o tipo de dado que deve retornar é photo
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    constructor(private service: PhotoService){}
    //route: ActivatedRouteSnapshot - Diz oq esta acontecendo na rota naquele momento.
    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        
        const userName = route.params.userName;
        return this.service.listFromUsePaginated(userName, 1)
    }
}