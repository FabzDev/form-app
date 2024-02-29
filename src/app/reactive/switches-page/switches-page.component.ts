import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

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

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
    ){}

  isNotValid(field: string):boolean | null{
    return this.validatorsService.isInvalidField(this.switchesForm, field);
  }

  onSave(): void{
    if(this.switchesForm.invalid){
      this.switchesForm.markAllAsTouched();
      return;
    }


    const {terms, ...newPerson} = this.switchesForm.value;

    console.log(newPerson);

  }

}
