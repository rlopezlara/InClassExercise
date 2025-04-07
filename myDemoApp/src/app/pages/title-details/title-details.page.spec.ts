import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleDetailsPage } from './title-details.page';

describe('TitleDetailsPage', () => {
  let component: TitleDetailsPage;
  let fixture: ComponentFixture<TitleDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
