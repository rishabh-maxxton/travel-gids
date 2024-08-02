import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoModuleFoundComponent } from './no-module-found.component';

describe('NoModuleFoundComponent', () => {
  let component: NoModuleFoundComponent;
  let fixture: ComponentFixture<NoModuleFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoModuleFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoModuleFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
