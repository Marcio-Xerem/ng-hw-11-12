import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPostComponent } from './api-post.component';

describe('ApiPostComponent', () => {
  let component: ApiPostComponent;
  let fixture: ComponentFixture<ApiPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
