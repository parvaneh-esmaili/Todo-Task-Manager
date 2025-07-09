import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ligInGuard } from './lig-in.guard';

describe('ligInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ligInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
