/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import {
  A,
  ABBR,
  ADDRESS,
  ARTICLE,
  ASIDE,
  AUDIO,
  B,
  BDI,
  BDO,
  BLOCKQUOTE,
  BR,
  BUTTON,
  CANVAS,
  CITE,
  CODE,
  DATA,
  DATALIST,
  DEL,
  DETAILS,
  DFN,
  DIALOG,
  DIV,
  DL,
  EM,
  EMBED,
  FIELDSET,
  FIGURE,
  FOOTER,
  FORM,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HEADER,
  HGROUP,
  HR,
  I,
  IFRAME,
  IMG,
  INPUT,
  INS,
  KBD,
  LABEL,
  MAIN,
  MAP,
  MARK,
  MATH,
  MENU,
  METER,
  NAV,
  NOSCRIPT,
  OBJECT,
  OL,
  OUTPUT,
  P,
  PICTURE,
  PRE,
  PROGRESS,
  Q,
  RUBY,
  S,
  SAMP,
  SCRIPT,
  SEARCH,
  SECTION,
  SELECT,
  SLOT,
  SMALL,
  SPAN,
  STRONG,
  SUB,
  SUP,
  SVG,
  TABLE,
  TEMPLATE,
  TEXTAREA,
  TIME,
  U,
  UL,
  VAR,
  VIDEO,
  WBR,
} from "../node_names";

/**
 * Indicates whether a node is flow content.
 *
 * [MDN Reference]()
 */
export function isFlowContent(node: Node): boolean {
  const nodeNames = [
    A,
    ABBR,
    ADDRESS,
    ARTICLE,
    ASIDE,
    AUDIO,
    B,
    BDO,
    BDI,
    BLOCKQUOTE,
    BR,
    BUTTON,
    CANVAS,
    CITE,
    CODE,
    DATA,
    DATALIST,
    DEL,
    DETAILS,
    DFN,
    DIALOG,
    DIV,
    DL,
    EM,
    EMBED,
    FIELDSET,
    FIGURE,
    FOOTER,
    FORM,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    HEADER,
    HGROUP,
    HR,
    I,
    IFRAME,
    IMG,
    INPUT,
    INS,
    KBD,
    LABEL,
    MAIN,
    MAP,
    MARK,
    MATH,
    MENU,
    METER,
    NAV,
    NOSCRIPT,
    OBJECT,
    OL,
    OUTPUT,
    P,
    PICTURE,
    PRE,
    PROGRESS,
    Q,
    RUBY,
    S,
    SAMP,
    SEARCH,
    SCRIPT,
    SECTION,
    SELECT,
    SLOT,
    SMALL,
    SPAN,
    STRONG,
    SUB,
    SUP,
    SVG,
    TABLE,
    TEMPLATE,
    TEXTAREA,
    TIME,
    U,
    UL,
    VAR,
    VIDEO,
    WBR,
  ];
  return nodeNames.includes(node.nodeName);
}
