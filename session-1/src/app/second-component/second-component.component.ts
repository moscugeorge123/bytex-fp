import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  public ex: number;

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit() {
    this.ex = this.exampleService.getContainer();
    setInterval(() => {
      this.ex = this.exampleService.getContainer();
    }, 1000);
  }

}
