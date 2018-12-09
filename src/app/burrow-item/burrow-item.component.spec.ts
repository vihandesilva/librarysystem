import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurrowItemComponent } from './burrow-item.component';

describe('BurrowItemComponent', () => {
  let component: BurrowItemComponent;
  let fixture: ComponentFixture<BurrowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurrowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurrowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
