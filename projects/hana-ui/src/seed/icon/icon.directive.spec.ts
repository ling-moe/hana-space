import { IconDirective } from './icon.directive';
import {By} from '@angular/platform-browser';

describe('IconDirective', () => {
  it('should create an instance', () => {
    const directive = By.directive(IconDirective);
    expect(directive).toBeTruthy();
  });
});
