import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperienceFormComponent } from './new-experience-form.component';

describe('NewExperienceFormComponent', () => {
  let component: NewExperienceFormComponent;
  let fixture: ComponentFixture<NewExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExperienceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
