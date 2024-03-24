import { HTMLElementAttributes } from "./global";

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
  extends HTMLElementAttributes {
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
