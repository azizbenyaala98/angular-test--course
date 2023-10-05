import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDeatailsComponent } from './message-deatails.component';

describe('MessageDeatailsComponent', () => {
  let component: MessageDeatailsComponent;
  let fixture: ComponentFixture<MessageDeatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDeatailsComponent]
    });
    fixture = TestBed.createComponent(MessageDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
