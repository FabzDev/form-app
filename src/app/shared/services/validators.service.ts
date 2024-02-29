import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl) => {
    const value = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        isStrider: true,
      };
    }
    return null;
  };

  public isInvalidField(form: FormGroup, field: string): boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }
}