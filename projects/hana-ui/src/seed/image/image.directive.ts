import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hana-image]',
  exportAs: 'hanaImage'
})
export class ImageDirective implements OnInit{

  /**
   * @en
   * whether image is circular
   *
   * @cn
   * 图片是否为圆形
   */
  @Input()
  circular: boolean;
  /**
   * @en
   * the image's size
   *
   * @cn
   * 图片的大小
   */
  @Input()
  size: 'tiny' | 'small' | 'middle' | 'large' | 'huge' = 'middle';
  /**
   * @en
   * whether image is full-width
   *
   * @cn
   * 图片是否全宽
   */
  @Input()
  fullWidth: boolean;

  el: HTMLElement;

  constructor(
    el: ElementRef,
    private render: Renderer2
  ) {
    this.el = el.nativeElement;
  }

  ngOnInit(): void {
    this.render.setAttribute(this.el, 'class', ['hana-image', `hana-image-${this.size}`, this.circular ? 'hana-image-circular' : ''].join(' '));
    this.render.setStyle(this.el, 'width', this.fullWidth ? '100%' : false);
  }

}
