import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <p> {{name}} is at {{street}} in {{city}} in the {{region}} region.</p>
  <br /> 
  <fieldset>
    <label> Name:  <input [(ngModel)]="name"> </label>
  </fieldset>
  
  <label> <input type="checkbox" [(ngModel)]="hideAddress"> Hide Address </label>
  <div [hidden]="hideAddress">
    <h2> User Properties </h2>
    <fieldset>
      <label> Street: <input [(ngModel)]="street">  </label>
    </fieldset>
    <fieldset>
      <label> City:  <input [(ngModel)]="city">  </label>
    </fieldset>
    <p> Region: 
      <select [(ngModel)]="region">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
    </p>
  </div>

  
  `,
})
export class AppComponent  { 
  name = 'Alex Smith'; 
  street= "123 Main Street";
  city = "Texas";
  region= "North";
  hideAddress = false;

}
