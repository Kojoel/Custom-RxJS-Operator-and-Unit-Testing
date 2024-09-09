import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { customOperator } from './observable function/customOperator';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Custom-RxJS-Operator-and-Unit-Testing';

  result: Observable<number> | undefined;

  ngOnInit() {
    this.result= of(1,2,3,4).pipe(
      customOperator()
    )
  }
}
