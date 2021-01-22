import { ImageDirective } from './image.directive';
import {By} from '@angular/platform-browser';

describe('ImageDirective', () => {
  it('should create an instance', () => {
    const directive = By.directive(ImageDirective);
    expect(directive).toBeTruthy();
  });
});
