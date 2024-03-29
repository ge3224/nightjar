/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Indicates if the given node is a member of the interactive content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content)
 */
export function isInteractiveContent(node: Node): boolean {
  const nodeNames = [
    "BUTTON",
    "DETAILS",
    "EMBED",
    "IFRAME",
    "LABEL",
    "SELECT",
    "TEXTAREA",
  ];

  // TODO: Handle conditional elements, see MDN reference.
  return nodeNames.includes(node.nodeName);
}
