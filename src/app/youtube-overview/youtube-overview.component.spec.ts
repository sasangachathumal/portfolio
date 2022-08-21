import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeOverviewComponent } from './youtube-overview.component';

describe('YoutubeOverviewComponent', () => {
  let component: YoutubeOverviewComponent;
  let fixture: ComponentFixture<YoutubeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
