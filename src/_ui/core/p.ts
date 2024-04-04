/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { ParagraphBuilder } from "@/_definitions/builders";
import { P } from "@/_lib/node_names";

/**
 * Helper function to set attributes on an HTML paragraph element.
 * @param element The HTML paragraph element to set attributes on.
 * @param attributes An object containing attributes to set on the element.
 * @returns The modified HTML paragraph element with the specified attributes.
 */
const setElementAttributes = (
  element: HTMLParagraphElement,
  attributes: HTMLElementAttributes
): HTMLParagraphElement => {
  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        element.autofocus = value;
        break;
      case "inert":
        element.inert = value;
        break;
      default:
        element.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });
  return element;
};

/**
 * Helper function to append children to an HTML element.
 * @param parent The parent HTML element to which children will be appended.
 * @param children An array of children (either strings or DOM nodes) to append to the parent element.
 * @returns The modified parent HTML element with the appended children.
 */
const appendChildren = (
  parent: HTMLElement,
  children?: Array<string | Node>
): HTMLParagraphElement => {
  if (children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        parent.appendChild(document.createTextNode(child));
      } else {
        parent.appendChild(child);
      }
    });
  }
  return parent as HTMLParagraphElement;
};

/**
 * Function to create a new paragraph element builder.
 * @param attributes An optional object containing attributes to set on the paragraph element.
 * @param children Optional children (strings or DOM nodes) to append to the paragraph element.
 * @returns A builder object with methods to set attributes, append children, and build the final paragraph element.
 */
const p = (
  attributes: HTMLElementAttributes = {},
  ...children: Array<string | Node>
): ParagraphBuilder => {
  const paragraph = document.createElement(P) as HTMLParagraphElement;
  setElementAttributes(paragraph, attributes);
  appendChildren(paragraph, children);

  const builder: ParagraphBuilder = {
    /**
     * Method to set attributes on the paragraph element.
     * @param newAttributes An object containing attributes to set on the paragraph element.
     * @returns The builder object for method chaining.
     */
    attributes(newAttributes: HTMLElementAttributes) {
      setElementAttributes(paragraph, newAttributes);
      return builder;
    },
    /**
     * Method to append children to the paragraph element.
     * @param newChildren Additional children (strings or DOM nodes) to append to the paragraph element.
     * @returns The builder object for method chaining.
     */
    children(...newChildren: Array<string | Node>) {
      appendChildren(paragraph, newChildren);
      return builder;
    },
    /**
     * Method to build and return the final HTML paragraph element.
     * @returns The final HTML paragraph element with all specified attributes and children.
     */
    build() {
      return paragraph;
    },
  };

  return builder;
};

export default p;
