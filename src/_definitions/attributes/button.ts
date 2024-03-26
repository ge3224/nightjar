import {
  FormAttributeEnctype,
  FormAttributeMethod,
  FormAttributesTarget,
} from "./form";
import { HTMLElementAttributes } from "./global";
import { PopoverTargetAction } from "./popover";

/**
 * Gets the classification and default behavior of the button.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type)
 */
export enum ButtonAttributeType {
  /**
   * The button submits the form data to the server.
   */
  submit = "submit",
  /**
   * The button resets all the controls to their initial values,
   * like <input type="reset">. (This behavior tends to annoy users.)
   */
  reset = "reset",
  /**
   * The button has no default behavior, and does nothing when pressed by default.
   */
  button = "button",
}

/**
 * Attributes for the HTML Button element, an interactive element activated
 * by a user with a mouse, keyboard, finger, voice command, or other
 * assistive technology.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 */
export interface HTMLButtonElementAttributes extends HTMLElementAttributes {
  /**
   * This Boolean attribute prevents the user from interacting with the button:
   * it cannot be pressed or focused.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled)
   */
  disabled?: boolean;
  /**
   * Retrieves a reference to the form that the object is embedded in.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form)
   */
  form?: string;
  /**
   * The URL that processes the information submitted by the button. Overrides
   * the action attribute of the button's form owner. Does nothing if there is
   * no form owner.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction)
   */
  formAction?: string;
  /**
   * Used to override the encoding (formEnctype attribute) specified on the form element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formenctype)
   */
  formEnctype?: FormAttributeEnctype;
  /**
   * Overrides the submit method attribute previously specified on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formmethod)
   */
  formMethod?: FormAttributeMethod;
  /**
   * Overrides any validation or required attributes on a form or form elements
   * to allow it to be submitted without validation. This can be used to create
   * a "save draft"-type submit option.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formnovalidate)
   */
  formNoValidate?: boolean;
  /**
   * Overrides the target attribute on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formtarget)
   */
  formTarget?: FormAttributesTarget;
  /**
   * Sets or retrieves the name of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name)
   */
  name?: string;
  /**
   * Turns a <button> element into a popover control button; takes the ID of
   * the popover element to control as its value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertarget)
   */
  popoverTarget?: string;
  /**
   * Specifies the action to be performed on a popover element being controlled
   * by a control <button>.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertargetaction)
   */
  popoverTargetAction?: PopoverTargetAction;
  /**
   * Gets the classification and default behavior of the button.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/type)
   */
  type?: ButtonAttributeType;
  /**
   * Sets or retrieves the default or selected value of the control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value)
   */
  value?: string;
}
