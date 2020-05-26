import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosComponent } from './fondos.component';

describe('FondosComponent', () => {
  let component: FondosComponent;
  let fixture: ComponentFixture<FondosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
