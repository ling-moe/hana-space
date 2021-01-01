import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

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
   * Setting button size one of 'large','middle','small'
   *
   * @cn
   * 设置按钮大小，可选配置为： 'large','middle','small'
   */
  @Input()
  size: 'large' | 'middle' | 'small';

  /**
   * @en
   * Setting button type one of 'primary','error','default','disabled'
   *
   * @cn
   * 设置按钮类型，可选配置：'primary','error','default','disabled'
   */
  @Input()
  type: 'primary' | 'error' | 'default' | 'disabled' | 'warning';

  /**
   * @en
   * Button HTML type attribute
   *
   * @cn
   * 按钮type 类型
   */
  @Input()
  htmlType: string;

  /**
   * @en
   * Show button label, default is placed in button's left
   *
   * @cn
   * 按钮label，默认显示在按钮左边
   */
  @Input()
  label: string;

  /**
   * @en
   * Setting button label, default value is 'left'
   *
   * @cn
   * 指定按钮label 位置，默认值为'left'
   */
  @Input()
  labelPosition: 'left' | 'right';

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

  /**
   * @en
   * Custom button component class name
   *
   * @cn
   * 设置组件class name
   */
  @Input()
  className: string;

  /**
   * @en
   * Custom button click event
   *
   * @cn
   * 自定义按钮点击事件
   */
  @Input()
  onClick: (e) => {};

  prefix = 'hana';

  constructor() { }

  ngOnInit(): void {
    this.type = 'default';
    this.htmlType = 'button';
    this.size = 'middle';
    this.className  = '';
  }

  handleClick(e: Event): any {
    if (this.type === 'disabled') {
      e.preventDefault();
      return false;
    }

    if (typeof this.onClick === 'function') {
      return this.onClick(e);
    }
  }

  get actualIconStyle(): object{
    return {...this.iconStyle, marginRight: 3};
  }
}
