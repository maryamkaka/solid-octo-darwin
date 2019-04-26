import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorButtonComponent } from './generator-button.component';

describe('GeneratorButtonComponent', () => {
  let component: GeneratorButtonComponent;
  let fixture: ComponentFixture<GeneratorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
