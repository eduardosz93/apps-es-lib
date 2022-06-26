import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsEsLibComponent } from './apps-es-lib.component';

describe('AppsEsLibComponent', () => {
  let component: AppsEsLibComponent;
  let fixture: ComponentFixture<AppsEsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsEsLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsEsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
