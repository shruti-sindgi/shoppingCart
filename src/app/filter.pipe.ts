import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr,searchin) {
    console.log(arr);
    console.log(searchin);
    
    
    return arr.filter(e=>e.name.toLowerCase().indexOf(searchin.toLowerCase())>-1)

  }

}
