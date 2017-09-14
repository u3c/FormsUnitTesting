import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Injectable()
export class FormService {

  control = new FormControl('', [Validators.required, Validators.minLength(3)]);

}
