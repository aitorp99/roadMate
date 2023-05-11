import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomNavigationComponent } from './buttom-navigation.component';

describe('ButtomNavigationComponent', () => {
  let component: ButtomNavigationComponent;
  let fixture: ComponentFixture<ButtomNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
