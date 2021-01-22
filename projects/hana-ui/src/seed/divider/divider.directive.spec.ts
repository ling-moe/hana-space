import { DividerDirective } from './divider.directive';
import {By} from '@angular/platform-browser';

describe('DividerDirective', () => {
  it('should create an instance', () => {
    const directive = By.directive(DividerDirective);
    expect(directive).toBeTruthy();
  });
});
