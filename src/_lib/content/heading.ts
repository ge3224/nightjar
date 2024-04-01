/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { H1, H2, H3, H4, H5, H6, HGROUP } from "../node_names";

/**
 * Indicates whether a node is heading content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#heading_content)
 */
export function isHeadingContent(node: Node): boolean {
  const nodeNames = [H1, H2, H3, H4, H5, H6, HGROUP];

  return nodeNames.includes(node.nodeName);
}

/**
 * Checks if a node is a descendant of a member of the header content category.
 */
export function isDescendantOfHeader(node: Node): boolean {
  if (!(node instanceof Node)) {
    return false;
  }

  function checkAncestors(ancestor: Node | null): boolean {
    if (!ancestor) {
      // Reached the root of the document, no header found
      return false;
    }
    if (isHeadingContent(ancestor)) {
      // Found a header element
      return true;
    }
    // Recursively check the parent node
    return checkAncestors(ancestor.parentNode);
  }
  // Start checking from the parent node
  return checkAncestors(node.parentNode);
}
