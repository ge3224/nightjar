import {
  FormAttributeEnctype,
  FormAttributeMethod,
  FormAttributesTarget,
} from "./form";
import { HTMLElementGlobalAttributes } from "./global";
import { PopoverTargetAction } from "./popover";

/**
 * A string specifying the type of control to render.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
 */
export enum InputAttributeType {
  /**
   * Rendered as simple push buttons that can be programmed to control custom
   * functionality anywhere on a webpage as required when assigned an event
   * handler function.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
   */
  button = "button",
  /**
   * A check box allowing single values to be selected/deselected.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
   */
  checkbox = "checkbox",
  /**
   * A control for specifying a color; opening a color picker when active in
   * supporting browsers.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
   */
  color = "color",
  /**
   * A control for entering a date (year, month, and day, with no time). Opens
   * a date picker or numeric wheels for year, month, day when active in
   * supporting browsers.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
   */
  date = "date",
  /**
   * A control for entering a date and time, with no time zone. Opens a date
   * picker or numeric wheels for date- and time-components when active in
   * supporting browsers.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)
   */
  datetimeLocal = "datetime-local",
  /**
   * A field for editing an email address.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
   */
  email = "email",
  /**
   * A control that lets the user select a file.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
   */
  file = "file",
  /**
   * A control that is not displayed but whose value is submitted to the server.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden)
   */
  hidden = "hidden",
  /**
   * A graphical submit button. Displays an image defined by the `src` attribute.
   * The `alt` attribute displays if the image src is missing.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image)
   */
  image = "image",
  /**
   * A control for entering a month and year, with no time zone.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month)
   */
  month = "month",
  /**
   * A control for entering a number. Displays a spinner and adds default
   * validation. Displays a numeric keypad in some devices with dynamic keypads.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
   */
  number = "number",
  /**
   * A single-line text field whose value is obscured. Will alert user if site
   * is not secure.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)
   */
  password = "password",
  /**
   * A radio button, allowing a single value to be selected out of multiple
   * choices with the same `name` value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
   */
  radio = "radio",
  /**
   * A control for entering a number whose exact value is not important.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
   */
  range = "range",
  /**
   * A button that resets the contents of the form to default values. Not recommended.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset)
   */
  reset = "reset",
  /**
   * A single-line text field for entering search strings. Line-breaks are
   * automatically removed from the input value. May include a delete icon in
   * supporting browsers that can be used to clear the field. Displays a search
   * icon instead of enter key on some devices with dynamic keypads.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)
   */
  search = "search",
  /**
   * A button that submits the form.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)
   */
  submit = "submit",
  /**
   * A control for entering a telephone number. Displays a telephone keypad in
   * some devices with dynamic keypads.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
   */
  tel = "tel",
  /**
   * The default value. A single-line text field. Line-breaks are automatically
   * removed from the input value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
   */
  text = "text",
  /**
   * A control for entering a time value with no time zone.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time)
   */
  time = "time",
  /**
   * A field for entering a URL. Looks like a text input, but has validation
   * parameters and relevant keyboard in supporting browsers and devices with
   * dynamic keyboards.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)
   */
  url = "url",
  /**
   * A control for entering a date consisting of a week-year number and a week
   * number with no time zone.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week)
   */
  week = "week",
}

/**
 * Creates interactive controls for web-based forms in order to accept data from the user.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 */
export interface HTMLInputElementAttributes extends HTMLElementGlobalAttributes {
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
  formAction?: string;
  /**
   * Used to override the encoding (formEnctype attribute) specified on the form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formEnctype)
   */
  formEnctype?: FormAttributeEnctype;
  /**
   * Overrides the submit method attribute previously specified on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/formMethod)
   */
  formMethod?: FormAttributeMethod;
  /**
   * Overrides any validation or required attributes on a form or form elements
   * to allow it to be submitted without validation. This can be used to create
   * a "save draft"-type submit option.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formnovalidate)
   */
  formNoValidate?: boolean;
  /**
   * Overrides the target attribute on a form element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formtarget)
   */
  formTarget?: FormAttributesTarget;
  /**
   * Sets or retrieves the height of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#height)
   */
  height?: number;
  /**
   * The value given to the list attribute should be the id of a <datalist>
   * element located in the same document.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list)
   */
  list?: string;
  /**
   * Defines the maximum acceptable value for an input element with
   * type="number".When used with the min and step attributes, lets you control
   * the range and increment (such as only even numbers) that the user can
   * enter into an input field.
   *
   * [MDN
   * Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max)
   */
  max?: string;
  /**
   * Sets or retrieves the maximum number of characters that the user can enter
   * in a text control.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength)
   */
  maxLength?: number;
  /**
   * Defines the minimum acceptable value for an input element with
   * type="number". When used with the max and step attributes, lets you
   * control the range and increment (such as even numbers only) that the user
   * can enter into an input field.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min)
   */
  min?: string;
  /**
   * Valid for text, search, url, tel, email, and password, it defines the
   * minimum string length (measured in UTF-16 code units) that the user can
   * enter into the entry field.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength)
   */
  minLength?: number;
  /**
   * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#multiple)
   */
  multiple?: boolean;
  /**
   * Sets or retrieves the name of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
   */
  name?: string;
  /**
   * Gets or sets a string containing a regular expression that the user's input must match.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern)
   */
  pattern?: string;
  /**
   * Gets or sets a text string that is displayed in an input field as a hint
   * or prompt to users as the format or type of information they need to
   * enter.The text appears in an input field until the user puts focus on the field.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder)
   */
  placeholder?: string;
  /**
   * Turns an <input type="button"> element into a popover control button;
   * takes the ID of the popover element to control as its value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#popovertarget)
   */
  popoverTarget?: string;
  /**
   * Specifies the action to be performed on a popover element being controlled
   * by a control <input type="button">.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#popovertargetaction)
   */
  popoverTargetAction?: PopoverTargetAction;
  /**
   * A Boolean attribute which, if present, indicates that the user should not
   * be able to edit the value of the input.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly)
   */
  readOnly?: boolean;
  /**
   * When present, marks an element that can't be submitted without a value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required)
   */
  required?: boolean;
  /**
   * Valid for email, password, tel, url, and text, the size attribute
   * specifies how much of the input is shown. Basically creates same result as
   * setting CSS width property with a few specialities. The actual unit of the
   * value depends on the input type. For password and text, it is a number of
   * characters (or em units) with a default value of 20, and for others, it is
   * pixels (or px units). CSS width takes precedence over the size attribute.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#size)
   */
  size?: number;
  /**
   * The address or URL of the a media resource that is to be considered.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#src)
   */
  src?: string;
  /**
   * Defines an increment or jump between values that you want to allow the
   * user to enter. When used with the max and min attributes, lets you control
   * the range and increment (for example, allow only even numbers) that the
   * user can enter into an input field.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step)
   */
  step?: string;
  /**
   * Specifying the type of control to render.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type)
   */
  type?: InputAttributeType;
  /**
   * Returns the value of the data at the cursor's current position.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value)
   */
  value?: string;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory)
   */
  webkitDirectory?: boolean;
  /**
   * Sets or retrieves the width of the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/width)
   */
  width?: number;
}
