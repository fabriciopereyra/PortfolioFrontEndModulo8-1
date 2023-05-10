import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeroFormComponent } from './update-hero-form.component';

describe('UpdateHeroFormComponent', () => {
  let component: UpdateHeroFormComponent;
  let fixture: ComponentFixture<UpdateHeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHeroFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
