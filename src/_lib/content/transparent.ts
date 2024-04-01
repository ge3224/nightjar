/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { A, ABBR, AUDIO, B, BDI, BDO, BR, BUTTON, CANVAS, CITE, CODE, DATA, DATALIST, DEL, DFN, EM, I, IFRAME, IMG, INPUT, INS, KBD, LABEL, MAP, MARK, METER, NOSCRIPT, OBJECT, OUTPUT, PICTURE, PROGRESS, Q, RUBY, S, SAMP, SCRIPT, SELECT, SLOT, SMALL, SPAN, STRONG, SUB, SUP, SVG, TEMPLATE, TEXTAREA, TIME, U, VAR, VIDEO } from "../node_names";

/**
 * Indicates if the given node is a member of the transparent content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#transparent_content_model)
 */
export function isTransparent(node: Node): boolean {
  const nodeNames = [
    A,
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
    DEL,
    DFN,
    EM,
    I,
    IFRAME,
    IMG,
    INPUT,
    INS,
    KBD,
    LABEL,
    MAP,
    MARK,
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
  ];

  return nodeNames.includes(node.nodeName);
}
