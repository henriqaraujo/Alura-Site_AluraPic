import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({
    
    //Com o componente em exports outros modulos conseguiram exporta-lo.
    //exports: [PhotoComponent],
    imports: [PhotoModule, PhotoFormModule, PhotoListModule],
    
})

export class PhotosModule{}