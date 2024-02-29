import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    user: ['', [Validators.required, cantBeStrider]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
    pass2: ['', Validators.required],
  })

  constructor(private fb: FormBuilder){}

  isValid(){
    // TODO: con servicios
  }

  onSave(): void{

    if(this.registerForm.invalid) return;

    console.log(this.registerForm.value);

  }

}
