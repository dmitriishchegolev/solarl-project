import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(UserService).isAdmin() ? true : router.createUrlTree(['/']);
};
