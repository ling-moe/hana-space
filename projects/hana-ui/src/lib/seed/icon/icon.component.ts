import {Component, Input, OnInit} from '@angular/core';
import validate = WebAssembly.validate;
import {assertNotNull} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

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
   * the icon type
   *
   * @cn
   * 图标的种类
   */
  @Input()
  type: string;

  /**
   * @en
   * the icon's color
   *
   * @cn
   * 图标的颜色
   */
  @Input()
  color: string;

  /**
   * @en
   * the icon's size
   *
   * @cn
   * 图标的尺寸
   */
  @Input()
  size: 'small' | 'middle' | 'large';

  /**
   * @en
   * the icon's classnames
   *
   * @cn
   * 图标的`class`
   */
  className: string[];

  prefix = 'hana';

  constructor() { }

  ngOnInit(): void {
    this.className = [];
    this.size = 'middle';
    if (!this.type){
      throw new Error('类型不能为空');
    }
  }

  get actualIconStyle(): object{
    return {...this.style, color: this.color};
  }

}
