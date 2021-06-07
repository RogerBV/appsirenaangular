import { TestBed } from '@angular/core/testing';

import { AccountingServicesService } from './accounting-services.service';

describe('AccountingServicesService', () => {
  let service: AccountingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
