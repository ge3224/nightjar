import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML Option element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#attributes)
 */
export interface HTMLOptionElementAttributes extends GlobalAttributes {
  /**
   * If this Boolean attribute is set, this option is not checkable.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#disabled)
   */
  disabled?: boolean;
  /**
   * This attribute is text for the label indicating the meaning of the option.
   * If the label attribute isn't defined, its value is that of the element
   * text content.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#label)
   */
  label?: string;
  /**
   * If present, this Boolean attribute indicates that the option is
   * initially selected.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#selected)
   */
  selected?: boolean;
  /**
   * The content of this attribute represents the value to be submitted with
   * the form, should this option be selected.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#value)
   */
  value?: string;
}
