import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input} from '@angular/core';
import language from '../../language';
import {arrayWith12Strings, arrayWith7Strings} from '../display/display.component';
import {normalizeDate} from '../utils';

@Component({
  selector: 'hana-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  /**
   * @en
   * A value will set to date, if not provided, this component will work in auto mode.
   *
   * @cn
   * 日期值，如果未提供，此组件将会运行在自动模式。
   */
  date: string & Date | null;
  /**
   * @en
   * A callback called when date is selected successful.
   *
   * (date: Date, text: string) => void
   *
   * @cn
   * 日期被选中时将会被调用的回调函数。
   *
   * (date: Date, text: string) => void
   */
  onChange = new EventEmitter<Date>();
  /**
   * @en
   * A callback called when user canceled the selection.
   *
   * () => void
   *
   * @cn
   * 选择框被关闭时将会被调用的回调函数。
   *
   * () => void
   */
  onCancel = new EventEmitter<void>();
  /**
   * @en
   * Your current language.
   *
   * @cn
   * 期望使用的语言。
   */
  lang: 'en' | 'cn' | 'jp';
  /**
   * @en
   * The mode of DOM will be placed.
   *
   * @cn
   * 放置在DOM上显示元素的类型。
   */
  view: 'text';
  /**
   * @en
   * Custom props will be set to view DOM if the 'view' property is 'text'.
   *
   * @cn
   * 当`view`为`text`模式时，此属性将会作为`props`被传递给`Text`组件。
   */
  viewProps: object;
  /**
   * @en
   * A property to control whether the dialog will be visible.
   *
   * @cn
   * 直接控制选择框是否显示。
   */
  show: boolean;
  /**
   * @en
   * If this property is true, a button for clearing will be added.
   *
   * @cn
   * 是否要添加清空功能。
   */
  withClear: boolean;
  /**
   * @en
   * If this property is true, dialog will be closed automatically after date selected.
   *
   * @cn
   * 是否在选择日期后，直接关闭选择框。
   */
  autoOk: boolean;
  /**
   * @en
   * A function for formatting date to string, this string will be passed to `onChange` as the second argument.
   *
   * (date: Date) => string
   *
   * @cn
   * 一个用于格式化日期到字符串的自定义方法，将会影响到所有和该组件输出`text`相关的属性。
   *
   * (date: Date) => string
   */
  format: (date: Date) => string;
  /**
   * @en
   * ClassName will be set to dialog.
   *
   * @cn
   * 选择框的class。
   */
  dialogClassName: string;
  /**
   * @en
   * Style will be set to dialog.
   *
   * @cn
   * 选择框的样式。
   */
  dialogStyle: object;
  /**
   * @en
   * Custom names of weekdays.
   *
   * @cn
   * 用户自定义的周一~周日的名称。
   */
  weekdayNames: arrayWith7Strings;
  /**
   * @en
   * Custom short names of weekdays.
   *
   * @cn
   * 用户自定义的周一~周日的短名称。
   */
  weekdayShortNames: arrayWith7Strings;
  /**
   * @en
   * Custom short names of months.
   *
   * @cn
   * 用户自定义的每个月的名称。
   */
  monthNames: arrayWith12Strings;
  /**
   * @en
   * Custom short names of action buttons.
   *
   * @cn
   * 用户自定义的选择框操作按钮的名称。
   */
  @Input()
  confirmName: string;
  @Input()
  cancelName: string;
  @Input()
  clearName: string;
  /**
   * @en
   * The start year.
   *
   * @cn
   * 可选范围的起始年份。
   */
  yearStart: number;
  /**
   * @en
   * The end year.
   *
   * @cn
   * 可选范围的结束年份。
   */
  yearEnd: number;

  innerDate: Date;

  preDate: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.preDate = this.date;
    this.innerDate = normalizeDate(this.date) || normalizeDate(new Date());
  }

  addDate(type, value): void {
    const {innerDate: d} = this;

    const date = new Date(d);

    switch (type) {
      case 'year':
        date.setFullYear(date.getFullYear() + value);
        break;
      case 'month':
        date.setMonth(date.getMonth() + value);
        break;
      case 'date':
        date.setDate(date.getDate() + value);
        break;
      default:
        break;
    }
    this.handleChangeDate(date);
  }

  handleChangeDate(d: Date, ok = false): void {
    if (ok) {
      this.handleConfirm(d);
    } else {
      this.innerDate = normalizeDate(d);
    }
  }

  handlePressKey(e: KeyboardEvent): void {
    const {
      show,
      innerDate: date
    } = this;

    if (!show) {
      return;
    }

    e.preventDefault();

    switch (e.key) {
      case 'ArrowLeft':
        if (e.altKey && e.shiftKey) {
          this.addDate('year', -1);
        } else if (e.shiftKey) {
          this.addDate('month', -1);
        } else {
          this.addDate('date', -1);
        }
        return;
      case 'ArrowRight':
        if (e.altKey && e.shiftKey) {
          this.addDate('year', 1);
        } else if (e.shiftKey) {
          this.addDate('month', 1);
        } else {
          this.addDate('date', 1);
        }
        return;
      case 'ArrowUp':
        if (e.altKey && e.shiftKey) {
          this.addDate('year', -1);
        } else if (e.shiftKey) {
          this.addDate('month', -1);
        } else {
          this.addDate('date', -7);
        }
        return;
      case 'ArrowDown':
        if (e.altKey && e.shiftKey) {
          this.addDate('year', 1);
        } else if (e.shiftKey) {
          this.addDate('month', 1);
        } else {
          this.addDate('date', 7);
        }
        return;
      case 'Enter':
        this.handleConfirm(date);
        return;
      case 'Escape':
        this.handleCancel();
        break;
      default:
        break;
    }
  }

  handleConfirm(d: Date): void {
    const {
      show,
      onChange,
    } = this;

    const date = new Date(d);

    onChange.emit(date);
    this.innerDate = date;
    this.show = show === undefined ? false : show;
  }

  handleCancel = () => {
    const {
      onCancel,
      show,
      date,
      innerDate
    } = this;

    onCancel.emit();
    this.innerDate = date ? new Date(date) : innerDate;
    this.show = show === undefined ? false : show;
  }

  handleClear = () => {
    const {
      show,
      onChange,
    } = this;

    onChange.emit();
    this.date = null;
    this.show = show === undefined ? false : show;
  }

  getWithLang(name: string): arrayWith7Strings | arrayWith12Strings {
    const { lang } = this;

    return this[name] ? this[name] : language[lang][name];
  }

  get toPre(): boolean {
    return this.preDate > this.date;
  }
}
