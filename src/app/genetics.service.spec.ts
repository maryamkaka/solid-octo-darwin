import { TestBed } from '@angular/core/testing';

import { GeneticsService } from './genetics.service';

describe('GeneticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneticsService = TestBed.get(GeneticsService);
    expect(service).toBeTruthy();
  });
});
