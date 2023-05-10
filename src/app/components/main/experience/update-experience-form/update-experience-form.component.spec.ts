import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExperienceFormComponent } from './update-experience-form.component';

describe('UpdateExperienceFormComponent', () => {
  let component: UpdateExperienceFormComponent;
  let fixture: ComponentFixture<UpdateExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExperienceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
