import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.scss',
})
export class CounterPageComponent { 
  public counter = signal(10);
  public squareCounter = computed( ()=> this.counter() * this.counter() );


  increaseBy(value: number){
    this.counter.update(current => current + value);
  }

}
