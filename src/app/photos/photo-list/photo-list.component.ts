import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  //Photos agora é um objeto do tipo array e tbm estamos exportando as fotos da API
  photos: Photo[] = [];
  //Para capturar o valor da busca
  filter: string = '';
  //Propriedade subject
  
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = ''

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }


  constructor( private activatedRoute: ActivatedRoute,
               private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    
  }

  load(){
    this.photoService.listFromUsePaginated(this.userName, ++this.currentPage)
    .subscribe(photos =>{
      this.filter = ''
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    })
  }
}
