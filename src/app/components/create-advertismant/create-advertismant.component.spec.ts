import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvertismantComponent } from './create-advertismant.component';

describe('CreateAdvertismantComponent', () => {
  let component: CreateAdvertismantComponent;
  let fixture: ComponentFixture<CreateAdvertismantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdvertismantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdvertismantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
