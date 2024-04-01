/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import {
  AUDIO,
  CANVAS,
  EMBED,
  IFRAME,
  IMG,
  MATH,
  OBJECT,
  PICTURE,
  SVG,
  VIDEO,
} from "../node_names";

/**
 * Indicates if the given node is a member of the embedded content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#embedded_content)
 */
export function isEmbeddedContent(node: Node): boolean {
  const nodeNames = [
    AUDIO,
    CANVAS,
    EMBED,
    IFRAME,
    IMG,
    MATH,
    OBJECT,
    PICTURE,
    SVG,
    VIDEO,
  ];

  return nodeNames.includes(node.nodeName);
}
