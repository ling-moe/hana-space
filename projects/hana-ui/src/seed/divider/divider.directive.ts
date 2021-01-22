import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hana-divider]',
  exportAs: 'hanaIcon'
})
export class DividerDirective implements OnInit{

  el: HTMLElement;

  constructor(
    el: ElementRef,
    private render: Renderer2
  ) {
    this.el = el.nativeElement;
  }

  ngOnInit(): void {
    this.render.setAttribute(this.el, 'class', 'hana-divider');
  }

}
