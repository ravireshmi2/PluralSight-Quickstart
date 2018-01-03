import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <p> {{name}} is in the {{region}} region.</p>
  <fieldset>
    <img src={{image}}/>
    <img [src]="image"/>
  </fieldset>
  <label [style.color]="color"> 
    Favorite Color: {{color}}
  </label>
  <button (click)="colorChange()">Toggle Color </button>
  <!--1 way to do it -->
  <!-- select #selector (change)="colorChange(selector.value)"> 
  <option>red</option>
  <option>blue</option>
  <option>green</option>
</select -->
  <!-- 2nd way to do it -- stick with this?-->
  <select (change)="colorChange($event.target.value)"> 
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <br />
  <hr>
  <button (click)="addressClick()"> Show/Hide Address Details </button>
  <div [hidden]="hideAddress">
    <h2> User Properties </h2>
    <p> Street: {{street}} </p>
    <p> City: {{city}} </p>
    <p> Region: 
      <select (change)="regionChange($event.target.value)">
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
  image = "favicon.ico"; // 2 ways to interpolate
  color = "red";
  street= "123 Main Street";
  city = "Texas";
  region= "North";
  hideAddress = false;

  
  // event binding
  clicked() {
    this.color = this.color == 'red'? 'blue': 'red'
  }
  colorChange(color: string) {
    this.color = color;
  }

  addressClick(){
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
