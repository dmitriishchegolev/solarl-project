import { CanDeactivateFn } from '@angular/router';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';

export const registrGuard: CanDeactivateFn<any> = (component: SignUpComponent, currentRoute: any, currentState: any, nextState: any) => {
  if (component.form.dirty) {
    return window.confirm('You uveren?')
  } else {
    return true;
  }
};
