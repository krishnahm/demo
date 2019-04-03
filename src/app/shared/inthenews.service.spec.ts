import { TestBed } from '@angular/core/testing';

import { InthenewsService } from './inthenews.service';

describe('InthenewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InthenewsService = TestBed.get(InthenewsService);
    expect(service).toBeTruthy();
  });
});
