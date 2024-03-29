/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Indicates if the given node is a member of the form-associated content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#form-associated_content)
 */
export function isFormContent(node: Node): boolean {
  const nodeNames = [
    "BUTTON",
    "FIELDSET",
    "INPUT",
    "LABEL",
    "METER",
    "OBJECT",
    "OUTPUT",
    "PROGRESS",
    "SELECT",
    "TEXTAREA",
  ];

  return nodeNames.includes(node.nodeName);
}
