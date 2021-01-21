import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendClapsComponent } from './send-claps.component';

describe('SendClapsComponent', () => {
  let component: SendClapsComponent;
  let fixture: ComponentFixture<SendClapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendClapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendClapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
