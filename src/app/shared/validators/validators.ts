import { FormControl } from "@angular/forms";

export const cantBeStrider = (control: FormControl) => {
  const value = control.value.trim().toLowerCase();

  if(value === 'strider'){
    return {
      isStrider: true
    }
  }

  return null

};
