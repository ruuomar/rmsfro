import { TestBed } from '@angular/core/testing';

import { StoreDataaTokenService } from './store-dataa-token.service';

describe('StoreDataaTokenService', () => {
  let service: StoreDataaTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDataaTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
