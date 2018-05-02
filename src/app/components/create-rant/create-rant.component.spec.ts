import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRantComponent } from './create-rant.component';

describe('CreateRantComponent', () => {
  let component: CreateRantComponent;
  let fixture: ComponentFixture<CreateRantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
