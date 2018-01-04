import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  { 
  hideAddress = false;
  //customer: Customer = new Customer(); // could do it this way to construct an instance
  customer: Customer= {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Anytown',
      state: 'CA',
      street: '123 Main Street',
      region: 'East'
    }
  }

}
