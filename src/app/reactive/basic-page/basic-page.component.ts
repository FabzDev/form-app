import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
;

  onSave(): void {
    if(this.myForm.invalid) return

    console.log(this.myForm.value);

    this.myForm.reset({name:'', price: 0, inStorage: 0})

  }
}
