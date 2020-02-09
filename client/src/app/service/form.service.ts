import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor() {}

    public markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched()

            if (control.controls) {
                control.controls.forEach((c) => this.markFormGroupTouched(c))
            }
        })
    }
}
