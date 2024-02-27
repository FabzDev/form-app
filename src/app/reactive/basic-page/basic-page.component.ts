import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

const play5 = { name: 'PlayStation 5', price: 500, inStorage: 30 }

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.min(0)]],
    inStorage: [0, [Validators.min(0)]],
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset( play5 )
  }

  isNotValid(field: string):boolean | null {
    return this.myForm.controls[field].errors && this.myForm.touched
  }

  errorMessage(field: string): string {
    if (this.isNotValid(field)){
      const errors =  this.myForm.controls[field].errors;
      for(const err in errors){
        switch ( err ){
          case 'required': return 'El producto es requerido';
          case 'minlength': return `El nombre del producto debe tener al menos ${errors['minlength'].requiredLength} carácteres`;
        }
      }
    }
    return ''
    // if (this.isNotValid(field)){
    //   const errors =  this.myForm.controls[field].errors || {};
    //   for(const key of Object.keys(errors)){
    //       switch ( key ){
    //         case 'required': return 'El producto es requerido';
    //         case 'minlength': return `El nombre del producto debe tener al menos ${errors['minlength'].requiredLength} carácteres`;
    //       }
    //     }
    //   }
    //   return '';
    }



  onSave(): void {
    if(this.myForm.invalid) return

    console.log(this.myForm.value);

    this.myForm.reset({name:'', price: 0, inStorage: 0})

  }
}
