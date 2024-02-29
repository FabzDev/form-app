import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {
  public switchesForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  })

  constructor(private fb: FormBuilder){}

  isNotValid(field: string):boolean | null{
    return this.switchesForm.controls[field].errors && this.switchesForm.controls[field].touched
  }

  onSave(): void{
    if(this.switchesForm.invalid){
      this.switchesForm.markAllAsTouched();
      return;
    }

    console.log(this.switchesForm.value);

  }

}
