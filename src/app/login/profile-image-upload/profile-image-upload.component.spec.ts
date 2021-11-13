import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageUploadComponent } from './profile-image-upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ProfileImageUploadComponent', () => {
  let component: ProfileImageUploadComponent;
  let fixture: ComponentFixture<ProfileImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImageUploadComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
