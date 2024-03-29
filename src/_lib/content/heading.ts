/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Indicates whether a node is heading content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#heading_content)
 */
export function isHeadingContent(node: Node): boolean {
  const nodeNames = ["H1", "H2", "H3", "H4", "H5", "H6", "HGROUP"];

  return nodeNames.includes(node.nodeName);
}
