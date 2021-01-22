import {
  AfterContentInit, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import {IconDirective} from '../../icon/icon.directive';

@Component({
  selector: 'button[hana-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, AfterViewInit {

  @ContentChild(IconDirective, { read: ElementRef })
  nzIconDirectiveElement!: ElementRef;

  /**
   * @en
   * Setting button size one of 'large','middle','small'
   *
   * @cn
   * 设置按钮大小，可选配置为： 'large','middle','small'
   */
  @Input()
  size: 'large' | 'middle' | 'small' = 'middle';

  /**
   * @en
   * Setting button type one of 'primary','error','default','disabled'
   *
   * @cn
   * 设置按钮类型，可选配置：'primary','error','default','disabled'
   */
  @Input()
  type: 'primary' | 'error' | 'default' | 'disabled' | 'warning' = 'default';

  /**
   * @en
   * Setting button label, default value is 'left'
   *
   * @cn
   * 指定按钮label 位置，默认值为'left'
   */
  @Input()
  labelPosition: 'left' | 'right' = 'left';

  /**
   * @en
   * Show button icon
   *
   * @cn
   * 按钮图标
   */
  @Input()
  icon: string;

  /**
   * @en
   * Setting button icon color
   *
   * @cn
   * 设置按钮图标颜色
   */
  @Input()
  iconColor: string;

  /**
   * @en
   * Custom button icon style
   *
   * @cn
   * 自定义按钮图标的样式
   */
  @Input()
  iconStyle: object;

  /**
   * @en
   * Setting icon size
   *
   * @cn
   * 设置按钮图标大小
   */
  @Input()
  iconSize: string;

  prefix = 'hana';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    [`${this.prefix}-button`, `${this.prefix}-button-${this.type}`, `${this.prefix}-button-${this.size}`].forEach(item => {
      this.renderer.addClass(this.elementRef.nativeElement, item);
    });
  }

  ngAfterViewInit(): void {
    this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }

  assertIconOnly(element: HTMLButtonElement, renderer: Renderer2): void {
    const listOfNode = Array.from(element.childNodes);
    const iconCount = listOfNode.filter(node => node.nodeName === 'I').length;
    const noText = listOfNode.every(node => node.nodeName !== '#text');
    const noSpan = listOfNode.every(node => node.nodeName !== 'SPAN');
    const isIconOnly = noSpan && noText && iconCount >= 1;
    if (isIconOnly) {
      renderer.setStyle(element, 'marginRight', '3');
    }
  }

  insertSpan(nodes: NodeList, renderer: Renderer2): void {
    nodes.forEach(node => {
      if (node.nodeName === '#text') {
        const span = renderer.createElement('span');
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
}
