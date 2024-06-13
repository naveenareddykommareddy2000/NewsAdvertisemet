import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecideAddComponent } from './homecide-add.component';

describe('HomecideAddComponent', () => {
  let component: HomecideAddComponent;
  let fixture: ComponentFixture<HomecideAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecideAddComponent]
    });
    fixture = TestBed.createComponent(HomecideAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
