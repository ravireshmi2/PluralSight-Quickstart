import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html'
})
export class AddressComponent  {
    @Input() address: Address;
    regions= ['East', 'Mid-West', 'West', 'North', 'South','Midwest'];
    states = ['California', 'Jalisco', 'Quebec', 'Illinois'];

}