import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsReadingComponent } from './rights-reading.component';

describe('RightsReadingComponent', () => {
  let component: RightsReadingComponent;
  let fixture: ComponentFixture<RightsReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
