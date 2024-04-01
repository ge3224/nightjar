/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { METER } from "../node_names";

/**
 * Checks if an HTML element contains any <meter> descendants.
 */
export function hasMeterDescendants(node: Node): boolean {
  // Check if the provided node is valid
  if (!node) {
    return false;
  }

  // If the node is a <meter> element, return true
  if (
    node.nodeType === Node.ELEMENT_NODE &&
    (node as Element).nodeName === METER
  ) {
    return true;
  }

  // Recursively check all child nodes
  if (node.childNodes) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (hasMeterDescendants(node.childNodes[i])) {
        return true;
      }
    }
  }

  // If no <meter> descendants were found, return false
  return false;
}
