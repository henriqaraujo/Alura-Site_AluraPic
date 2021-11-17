import { Component, Input } from '@angular/core';

@Component({
    //Essa sera a tag utilizada no HTML para chamar o component.
    selector: 'ap-photo',
    //O component irá trazer os arquivos HTML do seguinte caminho.
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {

    @Input() description='';
    @Input() url='';

}