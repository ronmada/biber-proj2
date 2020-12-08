import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiImportsComponent } from '../Components/api-imports/api-imports.component';

describe('ApiImportsComponent', () => {
  let component: ApiImportsComponent;
  let fixture: ComponentFixture<ApiImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiImportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
