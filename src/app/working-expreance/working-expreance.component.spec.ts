import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingExpreanceComponent } from './working-expreance.component';

describe('WorkingExpreanceComponent', () => {
  let component: WorkingExpreanceComponent;
  let fixture: ComponentFixture<WorkingExpreanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingExpreanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingExpreanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
