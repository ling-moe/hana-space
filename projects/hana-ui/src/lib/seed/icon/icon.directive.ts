import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hana-icon]',
  exportAs: 'hanaIcon'
})
export class IconDirective implements OnInit{

  /**
   * @en
   * the icon type
   *
   * @cn
   * 图标的种类
   */
  @Input()
  hanaType: string;

  /**
   * @en
   * the icon's size
   *
   * @cn
   * 图标的尺寸
   */
  @Input()
  hanaSize: 'small' | 'middle' | 'large';

  /**
   * @en
   * the icon's color
   *
   * @cn
   * 图标的颜色
   */
  @Input()
  hanaColor: string;

  el: HTMLElement;

  constructor(
    el: ElementRef,
    private render: Renderer2
    ) {
    this.el = el.nativeElement;
  }

  ngOnInit(): void {
    this.render.setAttribute(this.el, 'class', ['hana-icon', `icon-${this.hanaType}`, `hana-icon-${this.hanaSize}`].join(' '));
    this.render.setStyle(this.el, 'color', this.hanaColor);
  }

}
