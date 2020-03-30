import { TestBed } from '@angular/core/testing';

import { ArticlesMockService } from './articles-mock.service';

describe('ArticlesMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesMockService = TestBed.get(ArticlesMockService);
    expect(service).toBeTruthy();
  });
});
