export enum GlobalAutocapitalizeAttribute {
  none = "none",
  off = "off",
  sentences = "sentences",
  on = "on",
  words = "words",
  characters = "characters",
}

/**
 * Attributes common to all HTML elements; they can be used on all elements, though they may have
 * no effect on some elements.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 */
export interface HTMLElementGlobalAttributes {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute
   * consists of a space-separated list of characters.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)
   */
  accesskey?: string;
  autocapitalize?: GlobalAutocapitalizeAttribute;
  class?: string;
  id?: string;
  style?: string;
  title?: string;
}

export enum HTMLTargetAttribute {
  blank = "_blank",
  parent = "_parent",
  self = "_self",
  top = "_top",
}

export interface HTMLAnchorElementAttributes
  extends HTMLElementGlobalAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: HTMLTargetAttribute;
  type?: string;
}

/**
 * Set of numbering types for the 'type' attribute of the Order List HTML element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#type)
 */
export enum NumberingTypeAttribute {
  lowercaseLetters = "a",
  uppercaseLetters = "A",
  lowercaseRomanNumerals = "i",
  uppercaseRomanNumerals = "I",
  numbers = "1",
}

/**
 * Attributes specific to the HTML Ordered List element
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 */
export interface HTMLOListElementAttributes
  extends HTMLElementGlobalAttributes {
  reversed?: boolean;
  start?: number;
  type?: NumberingTypeAttribute;
}

/**
 * Indicates if the fetching of the image must be done using a CORS request.
 *
 * [MDN Reference](Indicates if the fetching of the image must be done using a CORS request.)
 */
export enum ImageAttributeCrossorigin {
  /**
   * A CORS request is sent with credentials omitted
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#anonymous)
   */
  anonymous = "anonymous",
  /**
   * The CORS request is sent with any credentials included
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#use-credentials)
   */
  useCredentials = "use-credentials",
}

/**
 * Provides a hint to the browser as to whether it should perform image decoding along with
 * rendering the other DOM content in a single presentation step
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding)
 */
export enum ImageAttributeDecoding {
  /**
   * Decode the image synchronously along with rendering the other DOM content, and present
   * everything together.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sync)
   */
  sync = "sync",
  /**
   * Decode the image asynchronously, after rendering and presenting the other DOM content.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#async)
   */
  async = "async",
  /**
   * No preference for the decoding mode; the browser decides what is best for the user.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#auto)
   */
  auto = "auto",
}

/**
 * Provides a hint of the relative priority to use when fetching the image.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority)
 */
export enum ImageAttributeFetchpriority {
  high = "high",
  low = "low",
  auto = "auto",
}

/**
 * Indicates how the browser should load the image.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading)
 */
export enum ImageAttributeLoading {
  /**
   * Loads the image immediately, regardless of whether or not the image is currently within the
   * visible viewport.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#eager)
   */
  eager = "eager",
  /**
   * Defers loading the image until it reaches a calculated distance from the viewport, as
   * defined by the browser.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#lazy)
   */
  lazy = "lazy",
}

/**
 * A string indicating which referrer to use when fetching the resource.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)
 */
export enum ImageAttributeReferrerpolicy {
  /**
   * The Referer header will not be sent.
   */
  noReferrer = "no-referrer",
  /**
   * The Referer header will not be sent to origins without TLS (HTTPS).
   */
  noReferrerWhenDowngrade = "no-referrer-when-downgrade",
  /**
   * The sent referrer will be limited to the origin of the referring page: its scheme,
   * host, and port.
   */
  origin = "origin",
  /**
   * The referrer sent to other origins will be limited to the scheme, the host, and the port.
   * Navigations on the same origin will still include the path.
   */
  originWhenCrossOrigin = "origin-when-cross-origin",
  /**
   * A referrer will be sent for same origin, but cross-origin requests will contain no
   * referrer information.
   */
  sameOrigin = "same-origin",
  /**
   * Only send the origin of the document as the referrer when the protocol security level stays
   * the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   */
  strictOrigin = "strict-origin",
  /**
   * Send a full URL when performing a same-origin request, only send the origin when the protocol
   * security level stays the same (HTTPS→HTTPS), and send no header to a less secure
   * destination (HTTPS→HTTP).
   */
  strictOriginWhenCrossOrigin = "strict-origin-when-cross-origin",
  /**
   * The referrer will include the origin and the path (but not the fragment, password, or
   * username). This value is unsafe, because it leaks origins and paths from TLS-protected
   * resources to insecure origins.
   */
  unsafeUrl = "unsafe-url",
}

/**
 * Attributes specific to the HTML Image element
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 */
export interface HTMLImageElementAttributes
  extends HTMLElementGlobalAttributes {
  /**
   * Defines text that can replace the image in the page.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt#usage_notes)
   */
  alt?: string;
  /**
   * Indicates if the fetching of the image must be done using a CORS request.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin)
   */
  crossorigin?: ImageAttributeCrossorigin;
  /**
   * Provides a hint to the browser as to whether it should perform image decoding along with
   * rendering the other DOM content in a single presentation step.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding)
   */
  decoding?: ImageAttributeDecoding;
  /**
   * Marks the image for observation by the PerformanceElementTiming API.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#elementtiming)
   */
  elementtiming?: string;
  /**
   * Provides a hint of the relative priority to use when fetching the image.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority)
   */
  fetchpriority?: ImageAttributeFetchpriority;
  /**
   * The intrinsic height of the image, in pixels. Must be an integer without a unit.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#height)
   */
  height?: number;
  /**
   * Indicates that the image is part of a server-side map.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#ismap)
   */
  ismap?: boolean;
  /**
   * Indicates how the browser should load the image.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading)
   */
  loading?: ImageAttributeLoading;
  /**
   * A string indicating which referrer to use when fetching the resource.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)
   */
  referrerpolicy?: ImageAttributeReferrerpolicy;
  /**
   * One or more strings separated by commas, indicating a set of source sizes.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes)
   */
  sizes?: string;
  /**
   * The image URL. Mandatory for the <img> element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src)
   */
  src: string;
  /**
   * One or more strings separated by commas, indicating possible image sources for the user
   * agent to use.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset)
   */
  srcset?: string;
  /**
   * The intrinsic width of the image in pixels. Must be an integer without a unit.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width)
   */
  width?: number;
  /**
   * The partial URL (starting with #) of an image map associated with the element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#usemap)
   */
  usemap?: string;
}

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
export interface HTMLFormElementAttributes extends HTMLElementGlobalAttributes {
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
