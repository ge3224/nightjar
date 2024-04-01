/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ABBR, AUDIO, B, BDI, BDO, BR, BUTTON, CANVAS, CITE, CODE, DATA, DATALIST, DFN, EM, EMBED, I, IFRAME, IMG, INPUT, KBD, LABEL, MARK, MATH, METER, NOSCRIPT, OBJECT, OUTPUT, PICTURE, PROGRESS, Q, RUBY, S, SAMP, SCRIPT, SELECT, SLOT, SMALL, SPAN, STRONG, SUB, SUP, SVG, TEMPLATE, TEXTAREA, TIME, U, VAR, VIDEO, WBR } from "../node_names";

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
