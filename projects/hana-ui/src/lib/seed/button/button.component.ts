import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  /**
   * @en
   * Custom component style
   *
   * @cn
   * 自定义组件样式
   */
  style: object;

  /**
   * @en
   * Setting button size one of 'large','middle','small'
   *
   * @cn
   * 设置按钮大小，可选配置为： 'large','middle','small'
   */
  size: 'large' | 'middle' | 'small' = 'middle';

  /**
   * @en
   * Setting button type one of 'primary','error','default','disabled'
   *
   * @cn
   * 设置按钮类型，可选配置：'primary','error','default','disabled'
   */
  type: 'primary' | 'error' | 'default' | 'disabled' | 'warning' = 'default';

  /**
   * @en
   * Button HTML type attribute
   *
   * @cn
   * 按钮type 类型
   */
  htmlType = 'button';

  /**
   * @en
   * Show button label, default is placed in button's left
   *
   * @cn
   * 按钮label，默认显示在按钮左边
   */
  label: string;

  /**
   * @en
   * Setting button label, default value is 'left'
   *
   * @cn
   * 指定按钮label 位置，默认值为'left'
   */
  labelPosition: 'left' | 'right';

  /**
   * @en
   * Show button icon
   *
   * @cn
   * 按钮图标
   */
  icon: string;

  /**
   * @en
   * Setting button icon color
   *
   * @cn
   * 设置按钮图标颜色
   */
  iconColor: string;

  /**
   * @en
   * Custom button icon style
   *
   * @cn
   * 自定义按钮图标的样式
   */
  iconStyle: object;

  /**
   * @en
   * Setting icon size
   *
   * @cn
   * 设置按钮图标大小
   */
  iconSize: string;

  /**
   * @en
   * Custom button component class name
   *
   * @cn
   * 设置组件class name
   */
  className: string;

  /**
   * @en
   * Custom button click event
   *
   * @cn
   * 自定义按钮点击事件
   */
  onClick: (e) => {};

  /**
   * @en
   * Setting button children element
   *
   * @cn
   * 设置按钮组件的子组件
   */
  children: Element;

  prefix = 'hana';

  constructor() { }

  ngOnInit(): void {
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
