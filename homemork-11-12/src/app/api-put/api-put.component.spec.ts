import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPutComponent } from './api-put.component';

describe('ApiPutComponent', () => {
  let component: ApiPutComponent;
  let fixture: ComponentFixture<ApiPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
