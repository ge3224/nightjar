import { HTMLElementAttributes } from "./global";

/**
 * Defines attributes specific to the HTML TextArea element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes)
 */
export interface HTMLTextAreaElementAttributes extends HTMLElementAttributes {
  /**
   * This attribute indicates whether the value of the control can be
   * automatically completed by the browser.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#autocomplete)
   */
  autocomplete?: AutoFill;
  /**
   * The visible width of the text control, in average character widths. If it
   * is specified, it must be a positive integer.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#cols)
   */
  cols?: number;
  /**
   * This attribute is used to indicate the text directionality of the element
   * contents similar to the dirname attribute of the <input> element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#dirname)
   */
  dirname?: string;
  /**
   * This Boolean attribute indicates that the user cannot interact with the
   * control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#disabled)
   */
  disabled?: boolean;
  /**
   * The form element that the <textarea> element is associated with (its "form owner").
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#form)
   */
  form?: string;
  /**
   * The maximum string length (measured in UTF-16 code units) that the user
   * can enter. If this value isn't specified, the user can enter an unlimited
   * number of characters.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#maxlength)
   */
  maxlength?: number;
  /**
   * The minimum string length (measured in UTF-16 code units) required that
   * the user should enter.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#minlength)
   */
  minlength?: number;
  /**
   * The name of the control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#name)
   */
  name?: string;
  /**
   * A hint to the user of what can be entered in the control. Carriage returns
   * or line-feeds within the placeholder text must be treated as line breaks
   * when rendering the hint.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#placeholder)
   */
  placeholder?: string;
  /**
   * This Boolean attribute indicates that the user cannot modify the value of
   * the control. Unlike the disabled attribute, the readonly attribute does
   * not prevent the user from clicking or selecting in the control. The value
   * of a read-only control is still submitted with the form.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#readonly)
   */
  readOnly?: boolean;
  /**
   * This attribute specifies that the user must fill in a value before
   * submitting a form.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#required)
   */
  required?: boolean;
  /**
   * The number of visible text lines for the control. If it is specified, it
   * must be a positive integer.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows)
   */
  rows?: number;
  /**
   * Indicates how the control should wrap the value for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#wrap)
   */
  wrap?: TextAreaAttributeWrap;
}

/**
 * An enumeration of the possible values of the `wrap` attribute of the HTML
 * <textarea> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#wrap)
 */
export enum TextAreaAttributeWrap {
  /**
   * The browser automatically inserts line breaks (CR+LF) so that each line is
   * no longer than the width of the control; the cols attribute must be
   * specified for this to take effect.
   */
  hard = "hard",
  /**
   * The browser ensures that all line breaks in the entered value are a CR+LF
   * pair, but no additional line breaks are added to the value.
   */
  soft = "soft",
  /**
   * (Not supported by all browsers.) Like soft but changes appearance to
   * white-space: pre so line segments exceeding cols are not wrapped and the
   * <textarea> becomes horizontally scrollable.
   */
  off = "off",
}
