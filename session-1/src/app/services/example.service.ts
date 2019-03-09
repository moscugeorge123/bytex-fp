import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  private container = 1;

  public getContainer(): number {
    return this.container;
  }

  public setContainer(nr: number) {
    this.container = nr;
  }
}
