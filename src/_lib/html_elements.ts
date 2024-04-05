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
 * Sets attributes on an HTML element based on the provided attribute object.
 * @param element The HTML element to set attributes on.
 * @param attributes An object containing attributes to set on the element.
 * @returns The modified HTML element with the specified attributes.
 * @throws {Error} If an unsupported attribute value type is encountered.
 */
export const setElementAttributes = <T extends HTMLElement>(
  element: T,
  attributes: { [key: string]: AttributeValue }
): T => {
  /**
   * Object mapping each type of attribute value to a handler function.
   */
  const attributeHandlers: {
    [type: string]: (value: AttributeValue) => (key: string) => void;
  } = {
    /**
     * Handler function for string attribute values.
     * Sets the attribute on the element with the string value.
     * @param value The string attribute value to set.
     */
    string: (value: AttributeValue) => (key: string) =>
      element.setAttribute(key, value as string),

    /**
     * Handler function for number attribute values.
     * Sets the attribute on the element with the string representation of the number value.
     * @param value The number attribute value to set.
     */
    number: (value: AttributeValue) => (key: string) =>
      element.setAttribute(key, (value as number).toString()),

    /**
     * Handler function for boolean attribute values.
     * Sets the attribute on the element based on the boolean value.
     * If the value is true, sets the attribute to true.
     * If the value is false, sets the attribute to false.
     * @param value The boolean attribute value to set.
     */
    boolean: (value: AttributeValue) => (key: string) => {
      (element as any)[key] = value as boolean;
    },
  };

  // Iterate over each attribute and apply the corresponding handler
  Object.entries(attributes).forEach(([key, value]) => {
    const valueType = typeof value;
    const handler = attributeHandlers[valueType];
    // If a handler is found for the attribute value type, apply the handler
    // Otherwise, throw an error for unsupported attribute value types
    if (handler) {
      handler(value)(key);
    } else {
      throw new Error(
        `Unsupported attribute value type for key '${key}': '${valueType}'`
      );
    }
  });

  return element;
};
