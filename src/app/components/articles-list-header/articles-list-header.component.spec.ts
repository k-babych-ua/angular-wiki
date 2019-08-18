import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListHeaderComponent } from './articles-list-header.component';

describe('ArticlesListHeaderComponent', () => {
  let component: ArticlesListHeaderComponent;
  let fixture: ComponentFixture<ArticlesListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
