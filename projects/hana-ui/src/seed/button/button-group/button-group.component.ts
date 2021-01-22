import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hana-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  /**
   * @en
   * Custom component style
   *
   * @cn
   * 自定义组件样式
   */
  @Input()
  style: object;

  /**
   * @en
   * Custom button component class name
   *
   * @cn
   * 自定义组件class name
   */
  @Input()
  className: string[];

  prefix = 'hana';

  constructor() { }

  ngOnInit(): void {
    this.className = [];
  }

}
