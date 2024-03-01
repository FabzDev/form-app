import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

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

  public isField1EqualField2(field1: string, field2:string) {

    return (form : AbstractControl ): ValidationErrors | null => {

      const password1 = form.get(field1)?.value;
      const password2 = form.get(field2)?.value;

      if (password1 !== password2) {
        form.get(field2)?.setErrors({passNotMatch: true});
        return {passNotMatch: true};
      }

      // form.get(field2)?.setErrors(null);
      return null;
     }
  }
}
