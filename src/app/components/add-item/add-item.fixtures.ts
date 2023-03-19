import { ComponentFixture} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddItemComponent } from './add-item.component';

export class AddItemComponentFixtures {
  private readonly ADD_ITEM_BUTTON = 'button';

  private readonly fixture: ComponentFixture<AddItemComponent>;

  constructor(fixture: ComponentFixture<AddItemComponent>) {
    this.fixture = fixture;
  }

  /**
   * Clicks on the add item button
   */
  public clickAddItem() {
    const addItemDebugElement = this.fixture.debugElement;
    const button = addItemDebugElement.query(By.css(this.ADD_ITEM_BUTTON)).nativeElement;
    button.click();
  }

}
