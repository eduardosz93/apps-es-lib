import { TestBed } from '@angular/core/testing';

import { AppsEsLibService } from './apps-es-lib.service';

describe('AppsEsLibService', () => {
  let service: AppsEsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsEsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
