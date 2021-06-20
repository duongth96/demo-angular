import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpSelectboxComponent } from './cp-selectbox.component';

describe('CpSelectboxComponent', () => {
  let component: CpSelectboxComponent;
  let fixture: ComponentFixture<CpSelectboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpSelectboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
