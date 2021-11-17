import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

//Aqui definimos as rotas da aplicação, para o endereço A carregamos o component A.
const routes: Routes = [
    {path: 'user/:userName', component: PhotoListComponent, 
                            resolve:{photos: PhotoListResolver}},

    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    //Tudo que vier do 4200/exemplo é a rota raiz, ou seja ele vai importar os componentes da lista de routes
    //Então se o caminho for 4200/user/flavio o forRoot vai ver no array de routes e puxar os componentes de user/flavio
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {}