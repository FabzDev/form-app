import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public dynamicForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['HellDivers2', Validators.required],
      ['Ragnarok Online', Validators.required],
    ]),
  });

  public newFavoriteGame: FormControl = new FormControl('', Validators.required)


  constructor(private fb: FormBuilder) {}

  get favoriteGames(): FormArray {
    return this.dynamicForm.controls['favoriteGames'];
  }


  arrayIsNotValid(formArray: FormArray, i: number):boolean | null{
    return formArray.controls[i].errors && this.dynamicForm.touched
  }

  isNotValid():boolean | null{
    return this.dynamicForm.controls['name'].errors && this.dynamicForm.controls['name'].touched
  }

  errorMessage(): string {
    if (this.isNotValid()){
      const errors =  this.dynamicForm.controls['name'].errors;
      for(const err in errors){
        switch ( err ){
          case 'required': return 'El producto es requerido';
          case 'minlength': return `El nombre del producto debe tener al menos ${errors['minlength'].requiredLength} carácteres`;
        }
      }
    }
    return ''
    }

  onSubmit(): void {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value);
    this.dynamicForm.reset();
    (this.dynamicForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
  }

  onAddFavorite(): void {
    if (this.newFavoriteGame.invalid) return;

    this.favoriteGames.push(new FormControl(this.newFavoriteGame.value, Validators.required));

    this.newFavoriteGame.reset();
  }

  onDeleteFavorite(index: number): void {
    this.dynamicForm.controls['favoriteGames'].removeAt(index)
  }
}
