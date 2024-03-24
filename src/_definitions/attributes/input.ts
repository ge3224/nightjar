import { FormAttributeEnctype } from "./form";
import { HTMLElementAttributes } from "./global";

/**
 * Creates interactive controls for web-based forms in order to accept data from the user.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 */
export interface HTMLInputElementAttributes extends HTMLElementAttributes {
  /** 
   * Valid for the file input type only, the accept attribute defines which file types are 
   * selectable in a file upload control. 
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept)
   */
  accept?: string;
  /**
   * Valid for the image button only, provides alternative text for the image, displaying the value 
   * of the attribute if the image src is missing or otherwise fails to load.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt)
   */
  alt?: string;
  /**
   * Specifies whether autocomplete is applied to an editable text field.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/autocomplete)
   */
  autocomplete?: AutoFill;
  /**
   * A Boolean attribute which, if present, indicates that the input should automatically have 
   * focus when the page has finished loading
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus)
   */
  autofocus?: boolean
  /**
   * Introduced in the HTML Media Capture specification and valid for the file input type only, the 
   * capture attribute defines which media—microphone, video, or camera—should be used to capture a 
   * new file for upload with file upload control in supporting scenarios.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#capture)
   */
  capture?: string;
  /**
   * Sets or retrieves the state of the check box or radio button.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#checked)
   */
  checked?: boolean;
  /**
   * Valid for hidden, text, search, url, tel, and email input types, the dirname attribute enables 
   * the submission of the directionality of the element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#dirname)
   */
  dirname?: string;
  /**
   * A Boolean attribute which, if present, indicates that the user should not be able to 
   * interact with the input.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled)
   */
  disabled?: boolean;
  /**
   * Overrides the action attribute (where the data on a form is sent) on the parent form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formAction)
   */
  formaction?: string;
  /**
   * Used to override the encoding (formEnctype attribute) specified on the form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formEnctype)
   */
  formenctype?: FormAttributeEnctype;
  /**
   * Overrides the submit method attribute previously specified on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formMethod)
   */
  formmethod?: string;
  /**
   * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formNoValidate)
   */
  formNoValidate?: boolean;
  /**
   * Overrides the target attribute on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formTarget)
   */
  formTarget?: string;
  /**
   * Sets or retrieves the height of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/height)
   */
  height?: number;
  /** When set, overrides the rendering of checkbox controls so that the current value is not visible. */
  indeterminate?: boolean;
  /** Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field. */
  max?: string;
  /** Sets or retrieves the maximum number of characters that the user can enter in a text control. */
  maxLength?: number;
  /** Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field. */
  min?: string;
  minLength?: number;
  /**
   * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/multiple)
   */
  multiple?: boolean;
  /** Sets or retrieves the name of the object. */
  name?: string;
  /**
   * Gets or sets a string containing a regular expression that the user's input must match.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/pattern)
   */
  pattern?: string;
  /**
   * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/placeholder)
   */
  placeholder?: string;
  readOnly?: boolean;
  /**
   * When present, marks an element that can't be submitted without a value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/required)
   */
  required?: boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionDirection) */
  selectionDirection?: "forward" | "backward" | "none" | null;
  /** Gets or sets the end position or offset of a text selection. */
  selectionEnd?: number | null;
  /** Gets or sets the starting position or offset of a text selection. */
  selectionStart?: number | null;
  size?: number;
  /** The address or URL of the a media resource that is to be considered. */
  src?: string;
  /** Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field. */
  step?: string;
  /** Returns the content type of the object. */
  type?: string;
  /** Returns the value of the data at the cursor's current position. */
  value?: string;
  /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
  valueAsDate?: Date | null;
  /** Returns the input field value as a number. */
  valueAsNumber?: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory) */
  webkitdirectory?: boolean;
  /**
   * Sets or retrieves the width of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/width)
   */
  width?: number;
}
