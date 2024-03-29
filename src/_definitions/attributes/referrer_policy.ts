/**
 * A string indicating which referrer to use when fetching the resource.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)
 */
export enum HTMLElementAttributeReferrerPolicy {
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
