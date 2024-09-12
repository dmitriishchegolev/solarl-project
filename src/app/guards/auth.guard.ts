import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(UserService).isLoggedIn() ? true : router.createUrlTree(['/sign-in']);
};


@Injectable({
  providedIn: 'root'
})
export class AuthGuardLegacy implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return false;
  }
}
