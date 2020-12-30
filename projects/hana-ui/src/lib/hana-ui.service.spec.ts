import { TestBed } from '@angular/core/testing';

import { HanaUiService } from './hana-ui.service';

describe('HanaUiService', () => {
  let service: HanaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HanaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
