import {FormGroup} from "@angular/forms";


export function PasswordChecker(controlName:string,CompareControlName :string){
    return (formGroup:FormGroup)=>{
        const password = formGroup.controls[controlName];
        const confimPassword  = formGroup.controls[CompareControlName];

        if(password.value != confimPassword.value)
        {
            confimPassword.setErrors({mustMatch:true})
        }
        else
        {
            confimPassword.setErrors(null);
        }
    }
}