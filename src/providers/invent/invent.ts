import { Injectable } from '@angular/core';

/*
  Generated class for the InventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


export class Category {
    
    public nam: string;
    public description: string;

    constructor(nam, description) {
        this.nam = nam;
        this.description = description;
    }    
}


@Injectable()
export class InventProvider {

    categories : Category[] = [];

  constructor() {  }
  
  
  push(category)
  {
    this.categories.push(category);
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
