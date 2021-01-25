import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'a[hana-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit, AfterViewInit {

  /**
   * @en
   * Size of this component.
   *
   * @cn
   * 组件的尺寸。
   */
  @Input()
  size: 'small' | 'middle' | 'large' = 'middle';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    ['hana-link', `hana-link-${this.size}`].forEach(item => {
      this.renderer.addClass(this.elementRef.nativeElement, item);
    });
  }

  ngAfterViewInit(): void {
    this.insertSpan(this.elementRef.nativeElement.children, this.renderer);
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
