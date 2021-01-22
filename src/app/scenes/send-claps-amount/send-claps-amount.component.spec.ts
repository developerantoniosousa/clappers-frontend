import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendClapsTeamComponent } from './send-claps-team.component';

describe('SendClapsTeamComponent', () => {
  let component: SendClapsTeamComponent;
  let fixture: ComponentFixture<SendClapsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendClapsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendClapsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
