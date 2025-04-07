import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPatchComponent } from './api-patch.component';

describe('ApiPatchComponent', () => {
  let component: ApiPatchComponent;
  let fixture: ComponentFixture<ApiPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
