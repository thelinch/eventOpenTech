import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionDependencyComponent } from './injection-dependency.component';

describe('InjectionDependencyComponent', () => {
  let component: InjectionDependencyComponent;
  let fixture: ComponentFixture<InjectionDependencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionDependencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
