/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from ".";
import { HTMLElementAttributeReferrerPolicy } from "./referrer_policy";

/**
 * Defines attributes specific to the HTML <area> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#attributes)
 */
export interface HTMLAreaElementAttributes extends GlobalAttributes {
  /**
   * A text string alternative to display on browsers that do not display
   * images.
   */
  alt?: string;
  /**
   * The coords attribute details the coordinates of the shape attribute in
   * size, shape, and placement of an <area>.
   */
  coords?: string;
  /**
   * This attribute, if present, indicates that the author intends the
   * hyperlink to be used for downloading a resource.
   */
  download?: string;
  /**
   * The hyperlink target for the area. Its value is a valid URL.
   */
  href?: string;
  /**
   * Contains a space-separated list of URLs to which, when the hyperlink is
   * followed, POST requests with the body PING will be sent by the browser (in
   * the background).
   */
  ping?: string;
  /**
   * A string indicating which referrer to use when fetching the resource.
   */
  referrerpolicy?: HTMLElementAttributeReferrerPolicy;
  /**
   * For anchors containing the href attribute, this attribute specifies the
   * relationship of the target object to the link object. The value is a
   * space-separated list of link types.
   */
  rel?: string;
  /**
   * The shape of the associated hot spot.
   */
  shape?: string;
  /**
   * A keyword or author-defined name of the browsing context to display the
   * linked resource. The following keywords have special meanings:
   */
  target?: AreaAttributesTarget;
}

/**
 * Indicates where to the linked resource should be displayed.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#target)
 */
export enum AreaAttributesTarget {
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
}
