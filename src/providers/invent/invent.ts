import { Injectable } from '@angular/core';

/*
  Generated class for the InventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InventProvider {

    categories : string[] = ['1'];

  constructor() {  }
  
  
  push(element)
  {
    this.categories.push(element);
  }
  
  pop()
  {
    this.categories.pop();
  }
  
  remove(i)
  {
  	this.categories.splice(i,1);
  }
  
  clone(arra)
  {
    this.categories = arra.slice();
  }
  
  get()
  {
    return this.categories;
  }

}
