import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';
import { AsyncEmailValidator } from '../../shared/validators/email.validator';
// import * as customValidators from '../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[new AsyncEmailValidator()]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    user: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
    pass2: ['', Validators.required],
  }, {
    validators: [this.validatorsService.isField1EqualField2('pass','pass2')]
  }
  )

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    ){}

  isValid(field: string){
    return this.validatorsService.isInvalidField(this.registerForm, field);
  }

  onSave(): void{

    if(this.registerForm.invalid) return;

    console.log(this.registerForm.value);

  }

}
