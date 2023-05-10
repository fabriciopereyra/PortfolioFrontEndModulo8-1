import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducationFormComponent } from './update-education-form.component';

describe('UpdateEducationFormComponent', () => {
  let component: UpdateEducationFormComponent;
  let fixture: ComponentFixture<UpdateEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEducationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
