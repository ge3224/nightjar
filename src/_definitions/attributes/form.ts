import { HTMLElementAttributes } from "./global";

/**
 * Indicates whether input elements can by default have their values automatically completed by the browser.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete)
 */
export enum FormAttributesAutocomplete {
  /**
   * The browser may automatically complete entries.
   */
  on = "on",
  /**
   * The browser may not automatically complete entries.
   */
  off = "off",
}

/**
 * If the value of the method attribute is post, enctype is the MIME type of the form submission.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype)
 */
export enum FormAttributeEnctype {
  /**
   * The default value.
   */
  application = "application/x-www-form-urlencoded",
  /**
   * Use this if the form contains <input> elements with type=file.
   */
  multipart = "multipart/form-data",
  /**
   * Useful for debugging purposes.
   */
  text = "text/plain",
}

/**
 * The HTTP method to submit the form with.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method)
 */
export enum FormAttributeMethod {
  /**
   * The POST method; form data sent as the request body.
   */
  post = "post",
  /**
   * The GET; form data appended to the action URL with a ? separator.
   */
  get = "get",
  /**
   * When the form is inside a <dialog>, closes the dialog and causes a submit event to be fired on
   * submission, without submitting data or clearing the form.
   */
  dialog = "dialog",
}

/**
 * Indicates where to display the response after submitting the form.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target)
 */
export enum FormAttributesTarget {
  /**
   * Load into the same browsing context as the current one.
   */
  self = "_self",
  /**
   * Load into a new unnamed browsing context.
   */
  blank = "_blank",
  /**
   * Load into the parent browsing context of the current one.
   */
  parent = "_parent",
  /**
   * Load into the top-level browsing context (i.e., the browsing context that is an ancestor of
   * the current one and has no parent).
   */
  top = "_top",
  /**
   * Load the response from a form inside an embedded fenced frame into the top-level frame (i.e.,
   * traversing beyond the root of the fenced frame, unlike other reserved destinations).
   */
  unfencedTop = "_unfencedTop",
}

/**
 * Represents a document section containing interactive controls for submitting information.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 */
export interface HTMLFormElementAttributes extends HTMLElementAttributes {
  /**
   * Space-separated character encodings the server accepts. The browser uses them in the order
   * in which they are listed.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#accept-charset)
   */
  acceptCharset?: string;
  /**
   * Indicates whether input elements can by default have their values automatically completed by the browser.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete)
   */
  autocomplete?: FormAttributesAutocomplete;
  /**
   * The name of the form. The value must not be the empty string, and must be unique among the
   * form elements in the forms collection that it is in, if any.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#name)
   */
  name?: string;
  /**
   * Controls the annotations and what kinds of links the form creates.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#rel)
   */
  rel?: string;
  /**
   * The URL that processes the form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action)
   */
  action?: string;
  /**
   * If the value of the method attribute is post, enctype is the MIME type of the form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype)
   */
  enctype?: FormAttributeEnctype;
  /**
   * The HTTP method to submit the form with.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method)
   */
  method?: FormAttributeMethod;
  /**
   * This Boolean attribute indicates that the form shouldn't be validated when submitted.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate)
   */
  novalidate?: boolean;
  /**
   * Indicates where to display the response after submitting the form.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target)
   */
  target?: FormAttributesTarget;
}
