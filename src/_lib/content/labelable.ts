/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import {
  BUTTON,
  INPUT,
  METER,
  OUTPUT,
  PROGRESS,
  SELECT,
  TEXTAREA,
} from "../node_names";

/**
 * Indicates if a node is labelable content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#labelable)
 */
export function islabelable(input: Node): boolean {
  const nodeNames = [BUTTON, INPUT, METER, OUTPUT, PROGRESS, SELECT, TEXTAREA];
  return nodeNames.includes(input.nodeName);
}
