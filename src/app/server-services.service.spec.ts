import { TestBed, inject } from '@angular/core/testing';

import { ServerServicesService } from './server-services.service';

describe('ServerServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerServicesService]
    });
  });

  it('should be created', inject([ServerServicesService], (service: ServerServicesService) => {
    expect(service).toBeTruthy();
  }));
});
