import { TestBed } from '@angular/core/testing';

import { AddHeaderInterceptor } from './add-header.interceptor';

describe('AddHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHeaderInterceptor = TestBed.get(AddHeaderInterceptor);
    expect(service).toBeTruthy();
  });
});
