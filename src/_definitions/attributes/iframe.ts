import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML <iframe> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes)
 */
export interface HTMLIFrameElementAttributes extends GlobalAttributes {
  /**
   * Specifies a Permissions Policy for the <iframe>. The policy defines what
   * features are available to the <iframe> (for example, access to the
   * microphone, camera, battery, web-share, etc.) based on the origin of the
   * request.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow)
   */
  allow?: string;
  /**
   * Set to true if the <iframe> can activate fullscreen mode by calling the
   * requestFullscreen() method. Note: This attribute is considered a legacy
   * attribute and redefined as allow="fullscreen".
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allowfullscreen)
   */
  allowfullscreen?: string;
  /**
   * The height of the frame in CSS pixels.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#height)
   */
  height?: number;
  /**
   * Indicates when the browser should load the iframe.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading)
   */
  loading?: "eager" | "lazy";
  /**
   * A targetable name for the embedded browsing context.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#name)
   */
  name?: string;
  /**
   * Indicates which referrer to send when fetching the frame's resource.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#referrerpolicy)
   */
  referrerpolicy?: IFrameAttributeReferrerPolicy;
  /**
   * Controls the restrictions applied to the content embedded in the <iframe>.
   * The value of the attribute can either be empty to apply all restrictions,
   * or space-separated tokens to lift particular restrictions.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox)
   */
  sandbox?: IFrameAttributeSandbox;
  /**
   * The URL of the page to embed. Use a value of about:blank to embed an empty
   * page that conforms to the same-origin policy.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#src)
   */
  src?: string;
  /**
   * Inline HTML to embed, overriding the src attribute. If a browser does not
   * support the srcdoc attribute, it will fall back to the URL in the src
   * attribute.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc)
   */
  srcdoc?: string;
  /**
   * The width of the frame in CSS pixels. Default is 300.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#width)
   */
  width?: number;
}

export enum IFrameAttributeReferrerPolicy {
  /**
   * The Referer header will not be sent.
   */
  noReferrer = "no-referrer",
  /**
   * The Referer header will not be sent to origins without TLS (HTTPS).
   */
  noReferrerWhenDowngrade = "no-referrer-when-downgrade",
  /**
   * The sent referrer will be limited to the origin of the referring page: its
   * scheme, host, and port.
   */
  origin = "origin",
  /**
   * The referrer sent to other origins will be limited to the scheme, the
   * host, and the port. Navigations on the same origin will still include the
   * path.
   */
  originWhenCrossOrigin = "origin-when-cross-origin",
  /**
   * A referrer will be sent for same origin, but cross-origin requests will
   * contain no referrer information.
   */
  sameOrigin = "same-origin",
  /**
   * Only send the origin of the document as the referrer when the protocol
   * security level stays the same (HTTPS→HTTPS), but don't send it to a less
   * secure destination (HTTPS→HTTP).
   */
  strictOrigin = "strict-origin",
  /**
   * Send a full URL when performing a same-origin request, only send the
   * origin when the protocol security level stays the same (HTTPS→HTTPS), and
   * send no header to a less secure destination (HTTPS→HTTP).
   */
  strictOriginWhenCrossOrigin = "strict-origin-when-cross-origin",
  /**
   * The referrer will include the origin and the path (but not the fragment,
   * password, or username). This value is unsafe, because it leaks origins and
   * paths from TLS-protected resources to insecure origins.
   */
  unsafeUrl = "unsafe-url",
}

export enum IFrameAttributeSandbox {
  /**
   * Allows downloading files through an <a> or <area> element with the
   * download attribute, as well as through the navigation that leads to a
   * download of a file. This works regardless of whether the user clicked on
   * the link, or JS code initiated it without user interaction.
   */
  allowDownloads = "allow-downloads",
  /**
   * (Experimental) Allows for downloads to occur without a gesture from the user.
   */
  allowDownloadsWithoutUserActivation = "allow-downloads-without-user-activation",
  /**
   * Allows the page to submit forms. If this keyword is not used, form will be
   * displayed as normal, but submitting it will not trigger input validation,
   * sending data to a web server or closing a dialog.
   */
  allowForms = "allow-forms",
  /**
   * Allows the page to open modal windows by Window.alert(), Window.confirm(),
   * Window.print() and Window.prompt(), while opening a <dialog> is allowed
   * regardless of this keyword. It also allows the page to receive
   * BeforeUnloadEvent event.
   */
  allowModals = "allow-modals",
  /**
   * Lets the resource lock the screen orientation.
   */
  allowOrientationLock = "allow-orientation-lock",
  /**
   * Allows the page to use the Pointer Lock API.
   */
  allowPointerLock = "allow-pointer-lock",
  /**
   * Allows popups (like from Window.open(), target="_blank",
   * Window.showModalDialog()). If this keyword is not used, that functionality
   * will silently fail.
   */
  allowPopups = "allow-popups",
  /**
   * Allows a sandboxed document to open a new browsing context without forcing
   * the sandboxing flags upon it. This will allow, for example, a third-party
   * advertisement to be safely sandboxed without forcing the same restrictions
   * upon the page the ad links to. If this flag is not included, a redirected
   * page, popup window, or new tab will be subject to the same sandbox
   * restrictions as the originating <iframe>.
   */
  allowPopupsToEscapeSandbox = "allow-popups-to-escape-sandbox",
  /**
   * Allows embedders to have control over whether an iframe can start a
   * presentation session.
   */
  allowPresentation = "allow-presentation",
  /**
   * If this token is not used, the resource is treated as being from a special
   * origin that always fails the same-origin policy (potentially preventing
   * access to data storage/cookies and some JavaScript APIs).
   */
  allowSameOrigin = "allow-same-origin",
  /**
   * Allows the page to run scripts (but not create pop-up windows). If this
   * keyword is not used, this operation is not allowed.
   */
  allowScripts = "allow-scripts",
  /**
   * (Experimental) Allows a document loaded in the <iframe> to use the Storage
   * Access API to request access to unpartitioned cookies.
   */
  allowStorageAccessByUserActivation = "allow-storage-access-by-user-activation",
  /**
   * Lets the resource navigate the top-level browsing context (the one named _top).
   */
  allowTopNavigation = "allow-top-navigation",
  /**
   * Lets the resource navigate the top-level browsing context, but only if
   * initiated by a user gesture.
   */
  allowTopNavigationByUserActivation = "allow-top-navigation-by-user-activation",
  /**
   * Allows navigations to non-http protocols built into browser or registered
   * by a website. This feature is also activated by allow-popups or
   * allow-top-navigation keyword.
   */
  allowTopNavigationToCustomProtocols = "allow-top-navigation-to-custom-protocols",
}
