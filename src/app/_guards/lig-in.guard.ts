import { CanActivateFn } from '@angular/router';

export const ligInGuard: CanActivateFn = (route, state) => {
  return true;
};
