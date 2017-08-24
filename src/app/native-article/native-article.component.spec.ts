import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeArticleComponent } from './native-article.component';

describe('NativeArticleComponent', () => {
  let component: NativeArticleComponent;
  let fixture: ComponentFixture<NativeArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
