import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemComponentFixtures } from './add-item.fixtures'
import { AddItemComponent } from './add-item.component';

fdescribe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let fixtureHelpers: AddItemComponentFixtures;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixtureHelpers = new AddItemComponentFixtures(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick method when add item is clicked', async () => {
    spyOn(component, 'addItemClickEvent');
    fixtureHelpers.clickAddItem();
    await fixture.whenStable();

    expect(component.addItemClickEvent).toHaveBeenCalled();
  })
});
