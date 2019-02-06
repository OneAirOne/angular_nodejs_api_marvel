import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCharatersComponent } from './details-charaters.component';

describe('DetailsCharatersComponent', () => {
  let component: DetailsCharatersComponent;
  let fixture: ComponentFixture<DetailsCharatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCharatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCharatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
