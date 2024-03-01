import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AsyncEmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const formEmail: string = control.value;

    const httpObservable: Observable<ValidationErrors | null> = new Observable( (subscriber) => {

      console.log(formEmail);

      if(formEmail === 'fabio@gmail.com'){
        subscriber.next({emailTaken: true});
        subscriber.complete();
        return;
      }

      subscriber.next(null);
      subscriber.complete();

    } );

    return httpObservable.pipe(delay(3000));
  }
}

// validate(control: AbstractControl): Observable<ValidationErrors | null> {
//   return of({
//     emailTaking: true
//   }).pipe(
//     delay(3000)
//   )
// }
