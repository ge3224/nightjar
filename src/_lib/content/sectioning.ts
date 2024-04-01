/**
 * Project: Nightjar
 * Module: content/sectioning.ts
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ARTICLE, ASIDE, NAV, SECTION } from "../node_names";

/**
 *
 * Indicates if the given node is a member of the sectioning content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#sectioning_content)
 */
export function isSectioningContent(node: Node): boolean {
  const nodeNames = [ARTICLE, ASIDE, NAV, SECTION];

  return nodeNames.includes(node.nodeName);
}
