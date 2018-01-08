import { Component, Input } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  { 
  showAddress = true;
  
  @Input () customer: Customer; // exposes the customer property so the customer-list can pass the customer to the detail (master -> detail)
}
