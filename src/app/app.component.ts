import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { customOperator } from './observable function/customOperator';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Custom-RxJS-Operator-and-Unit-Testing';

  result: Observable<number> | undefined;
  input: number = 0;

  getResult() {
    this.result= of(this.input).pipe(
      customOperator()
    )
    console.log(this.input);
  }

}
