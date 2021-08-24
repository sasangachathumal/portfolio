import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOverviewComponent } from './dev-overview.component';

describe('DevOverviewComponent', () => {
  let component: DevOverviewComponent;
  let fixture: ComponentFixture<DevOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
