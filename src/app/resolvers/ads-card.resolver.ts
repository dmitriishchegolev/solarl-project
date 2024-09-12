import type { ResolveFn } from '@angular/router';

export const adsCardResolver: ResolveFn<any> = (route, state) => {
  return 'Товар ' + route.paramMap.get('id');
};
