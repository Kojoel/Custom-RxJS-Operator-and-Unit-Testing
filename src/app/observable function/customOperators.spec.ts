import { of, throwError, toArray } from "rxjs";
import { customOperator } from "./customOperator";

describe('customOperator', () => {
  
    it('should double the value emitted by the source observable', (done) => {
      const source$ = of(5);
  
      source$.pipe(
        customOperator(),
        toArray()
      ).subscribe({
        next: (result) => {
          expect(result).toEqual([10]);
          done();
        },
        error: done.fail
      });
    });
  
    it('should catch and handle errors', (done) => {
      const source$ = throwError(() => new Error('Test error'));

      source$.pipe(
        customOperator()
      ).subscribe({
        next: () => done.fail('Expected error but got a value'),
        error: (err) => {
          expect(err).toEqual(new Error('Test error'));
          done();
        }
      });
    });
  
  });