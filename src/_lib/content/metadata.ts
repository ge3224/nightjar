/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Indicates whether a node is a member of the metadata content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#metadata_content)
 */
export function isMetadataContent(node: Node): boolean {
  const nodeNames = [
    "BASE",
    "LINK",
    "META",
    "NOSCRIPT",
    "SCRIPT",
    "STYLE",
    "TITLE",
  ];

  return nodeNames.includes(node.nodeName);
}
