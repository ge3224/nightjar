/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Helper functions for building various HTML elements.
 */

import { AttributeValue } from "@/_definitions/attributes";

/**
 * Helper function to set attributes on an HTML element.
 * @param element The HTML element to set attributes on.
 * @param attributes An object containing attributes to set on the element.
 * @returns The modified HTML element with the specified attributes.
 */
export const setElementAttributes = <T extends HTMLElement>(
  element: T,
  attributes: { [key: string]: AttributeValue }
): T => {
  Object.entries(attributes).forEach(([key, value]) => {
    switch (typeof value) {
      case "string":
      case "number":
        element.setAttribute(key, value.toString());
        break;
      case "boolean":
        // For boolean attributes, use property assignment instead of setAttribute
        (element as any)[key] = value;
        break;
      default:
        throw new Error(`Unsupported attribute value type for key '${key}': '${typeof value}'`);
    }
  });
  return element;
};
