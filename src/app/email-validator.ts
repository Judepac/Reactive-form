import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const passwordRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const valid = passwordRegex.test(control.value);

    const errors = {
        email: {
            rules: 'doit etre un email'
        }
    };

    return !valid ? errors : null;
}
