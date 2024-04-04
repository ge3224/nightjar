/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import {
  HTMLElementAttributes,
  HTMLElementGlobalAttributes,
} from "@/_definitions/attributes";
import { ParagraphBuilder } from "@/_definitions/builders";
import { isPhrasingContent } from "@/_lib/content";
import { setElementAttributes } from "@/_lib/html_elements";
import { P } from "@/_lib/node_names";


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
      } else if (isPhrasingContent(child)) {
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
  attributes: HTMLElementGlobalAttributes = {},
  ...children: Array<string | Node>
): ParagraphBuilder => {
  const paragraph = document.createElement(P) as HTMLParagraphElement;
  attributes as HTMLElementAttributes;
  appendChildren(paragraph, children);

  const builder: ParagraphBuilder = {
    /**
     * Method to set attributes on the paragraph element.
     * @param newAttributes An object containing attributes to set on the paragraph element.
     * @returns The builder object for method chaining.
     */
    attributes(newAttributes: HTMLElementGlobalAttributes) {
      setElementAttributes(paragraph, newAttributes as HTMLElementAttributes);
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
