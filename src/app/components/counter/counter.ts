import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterValue:WritableSignal<number> = signal(0);
  counterText:WritableSignal<string> = signal("")

  counterReset() {
    if (this.counterValue() == 0) {
      this.counterText.set("Counter is already Zero, Please click Increment")
    } else {
      this.counterValue.set(0);
    }
  }

  counterIncrement() {
    this.counterText.set("")
    this.counterValue.update((value) => value + 1);
  }

  counterDecrement() {
    if (this.counterValue() == 0) {
      this.counterText.set("The value cannot go into negative!")
    } else {
      this.counterValue.update((value) => value - 1);
    }
  }
}
