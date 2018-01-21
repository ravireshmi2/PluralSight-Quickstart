import { Component,EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  { 
  showAddress = true;
  @Input () customer: Customer; // exposes the customer property so the customer-list can pass the customer to the detail (master -> detail)
  //Input allows u to send from parent comp to child
  @Output() shift= new EventEmitter<number> ();
  //Output allows u to send from child comp to parent
  
  left(){
    this.shift.emit(-1);
  }

  right(){
    this.shift.emit(1);
  }
}
