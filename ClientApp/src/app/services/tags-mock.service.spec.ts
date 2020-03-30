import { TestBed } from '@angular/core/testing';

import { TagsMockService } from './tags-mock.service';

describe('TagsMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsMockService = TestBed.get(TagsMockService);
    expect(service).toBeTruthy();
  });
});
