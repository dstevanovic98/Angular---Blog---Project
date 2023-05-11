import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCardsComponent } from './from-cards.component';

describe('FromCardsComponent', () => {
  let component: FromCardsComponent;
  let fixture: ComponentFixture<FromCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
