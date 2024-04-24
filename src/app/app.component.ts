import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Interpolation Task';
  name = "Ravindhiran";
  age = 29;

  //an object property details is an property and 
  //im assigning an object to this property using the object literal notation {}
  //properties of object are home and degree
  //In TypeScript, any is a special type that effectively disables static type checking for a particular variable or property. When you declare a variable or property with the any type, TypeScript allows you to assign values of any type to that variable or property without type checking.

  details: any = {
    home: "Salem",
    degree: "Horti"

  };
//if any is not used then we need to consider a class or interface
  deto: Details = {
    experience: 7
  }

  //using function

  getSqrt(a:number) {
    return Math.sqrt(a);
  }

  getMin(a:number,b:number) {
    return Math.min(a,b);
  }


}

class Details {
  experience!: number
}

