import { TestBed } from '@angular/core/testing';

import { Signalr.ServiceService } from './signalr.service.service';

describe('Signalr.ServiceService', () => {
  let service: Signalr.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signalr.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
