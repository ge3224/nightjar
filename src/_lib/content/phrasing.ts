/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ChildAppender } from "@/_definitions/child_appender";
import {
  ABBR,
  AUDIO,
  B,
  BDI,
  BDO,
  BR,
  BUTTON,
  CANVAS,
  CITE,
  CODE,
  DATA,
  DATALIST,
  DFN,
  EM,
  EMBED,
  I,
  IFRAME,
  IMG,
  INPUT,
  KBD,
  LABEL,
  MARK,
  MATH,
  METER,
  NOSCRIPT,
  OBJECT,
  OUTPUT,
  PICTURE,
  PROGRESS,
  Q,
  RUBY,
  S,
  SAMP,
  SCRIPT,
  SELECT,
  SLOT,
  SMALL,
  SPAN,
  STRONG,
  SUB,
  SUP,
  SVG,
  TEMPLATE,
  TEXTAREA,
  TIME,
  U,
  VAR,
  VIDEO,
  WBR,
} from "../node_names";

/**
 * Indicates whether a node is phrasing content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories)
 */
export function isPhrasingContent(node: Node): boolean {
  const nodeNames = [
    ABBR,
    AUDIO,
    B,
    BDI,
    BDO,
    BR,
    BUTTON,
    CANVAS,
    CITE,
    CODE,
    DATA,
    DATALIST,
    DFN,
    EM,
    EMBED,
    I,
    IFRAME,
    IMG,
    INPUT,
    KBD,
    LABEL,
    MARK,
    MATH,
    METER,
    NOSCRIPT,
    OBJECT,
    OUTPUT,
    PICTURE,
    PROGRESS,
    Q,
    RUBY,
    S,
    SAMP,
    SCRIPT,
    SELECT,
    SLOT,
    SMALL,
    SPAN,
    STRONG,
    SUB,
    SUP,
    SVG,
    TEMPLATE,
    TEXTAREA,
    TIME,
    U,
    VAR,
    VIDEO,
    WBR,
  ];

  // TODO: Handle conditional elements, see MDN reference.
  return nodeNames.includes(node.nodeName);
}

/**
 * Appends phrasing content to an HTML element.
 * Phrasing content can be either a string or a Node that is allowed as a child of a <span> element.
 * @param {HTMLElement} element - The HTML element to which the phrasing content will be appended.
 * @param {string | Node} child - The phrasing content to append, which can be a string or a Node.
 * @returns {void}
 */
export const appendPhrasingContent = <T extends HTMLElement>(
  element: T,
  child: string | Node
): void => {
  if (typeof child === "string") {
    // If the child is a string, create a TextNode and append it to the element.
    element.appendChild(document.createTextNode(child));
  } else if (isPhrasingContent(child)) {
    // If the child is a phrasing content node, append it to the element.
    element.appendChild(child);
  }
};
