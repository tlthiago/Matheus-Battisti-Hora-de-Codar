import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
  name: string = "Thiago";
  age: number = 30;
  job = "Programador";
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "Polo",
    year: 2019
  }

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
