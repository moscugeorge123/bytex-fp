import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public name: string = "Moscu George";
  public ex: number;

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit() {
    this.ex = this.exampleService.getContainer();
    setInterval(() => {
      this.exampleService.setContainer(Math.random());
    }, 1000);
  }

}
