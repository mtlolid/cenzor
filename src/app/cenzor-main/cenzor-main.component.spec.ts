import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenzorMainComponent } from './cenzor-main.component';

describe('CenzorMainComponent', () => {
  let component: CenzorMainComponent;
  let fixture: ComponentFixture<CenzorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenzorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenzorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
