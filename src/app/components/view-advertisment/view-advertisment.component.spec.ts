import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvertismentComponent } from './view-advertisment.component';

describe('ViewAdvertismentComponent', () => {
  let component: ViewAdvertismentComponent;
  let fixture: ComponentFixture<ViewAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdvertismentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
