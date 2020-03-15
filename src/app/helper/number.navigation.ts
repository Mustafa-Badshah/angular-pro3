import { FormGroup } from '@angular/forms';

export function NumMatch(contact:string){
    return function(myForm: FormGroup){
        let x = myForm.controls[contact];

        if (x.errors && !x.errors.numErr) {
            return;
         }
        // where the value is not a number then condition is true,then false
        if(isNaN(x.value)==true)
        {
            x.setErrors({numErr : true});
        } else {
            x.setErrors(null);
        }
    }
}