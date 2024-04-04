import { HTMLElementGlobalAttributes } from "./global";

/**
 * Defines attributes specific to the HTML Select element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes)
 */
export interface HTMLSelectElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * A string providing a hint for a user agent's autocomplete feature.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#autocomplete)
   */
  autocomplete?: AutoFill;
  /**
   * This Boolean attribute indicates that the user cannot interact with
   * the control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#disabled)
   */
  disabled?: boolean;
  /**
   * The <form> element to associate the <select> with (its form owner).
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#form)
   */
  form?: string;
  /**
   * This Boolean attribute indicates that multiple options can be selected in
   * the list.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#multiple)
   */
  multiple?: boolean;
  /**
   * This attribute is used to specify the name of the control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#name)
   */
  name?: string;
  /**
   * A Boolean attribute indicating that an option with a non-empty string
   * value must be selected.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#required)
   */
  required?: boolean;
  /**
   * If the control is presented as a scrolling list box (e.g. when multiple is
   * specified), this attribute represents the number of rows in the list that
   * should be visible at one time.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#size)
   */
  size?: number;
}
