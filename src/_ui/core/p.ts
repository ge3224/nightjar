/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ElementAttributes, GlobalAttributes } from "@/_definitions/attributes";
import { ElementCreator } from "@/_definitions/element_creator";
import { P } from "@/_lib/node_names";
import { appendPhrasingContent } from "@/_lib/content";
import { setElementAttributes } from "@/_lib/attributes";

/**
 * Creates a paragraph element with specified attributes and children.
 * @returns {ElementCreator<HTMLParagraphElement, GlobalAttributes>} An
 * ElementCreator object allowing further customization and creation of the
 * paragraph element.
 */
export default function p(): ElementCreator<
  HTMLParagraphElement,
  GlobalAttributes
> {
  /**
   * Array containing functions to set attributes for the paragraph element.
   * @type {Array<(element: HTMLParagraphElement) => void>}
   */
  const attributeSetters: Array<(element: HTMLParagraphElement) => void> = [];

  /**
   * Array containing functions to append children to the paragraph element.
   * @type {Array<(element: HTMLParagraphElement) => void>}
   */
  const childAppenders: Array<(element: HTMLParagraphElement) => void> = [];

  /**
   * An ElementCreator object providing methods to set attributes, append
   * children, and create the paragraph element.
   * @type {ElementCreator<HTMLParagraphElement, GlobalAttributes>}
   */
  const creator: ElementCreator<HTMLParagraphElement, GlobalAttributes> = {
    /**
     * Sets attributes for the paragraph element.
     * @param {ElementAttributes<GlobalAttributes>} attributes - The attributes to set.
     * @returns {ElementCreator<HTMLParagraphElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    attributes: (
      attributes: ElementAttributes<GlobalAttributes>
    ): ElementCreator<HTMLParagraphElement, GlobalAttributes> => {
      /**
       * Function to set attributes for the paragraph element.
       * @param {HTMLParagraphElement} element - The paragraph element to set attributes on.
       * @returns {void}
       */
      const attributeSetter = (element: HTMLParagraphElement): void => {
        setElementAttributes(element, attributes);
      };
      attributeSetters.push(attributeSetter);
      return creator;
    },
    /**
     * Sets children for the paragraph element.
     * @param {...Array<string | Node>} children - The children to append.
     * @returns {ElementCreator<HTMLParagraphElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    children: (
      ...children: Array<string | Node>
    ): ElementCreator<HTMLParagraphElement, GlobalAttributes> => {
      /**
       * Function to append children to the paragraph element.
       * @param {HTMLParagraphElement} element - The paragraph element to append children to.
       * @returns {void}
       */
      const childAppender = (element: HTMLParagraphElement): void => {
        children.forEach((child) => appendPhrasingContent(element, child));
      };
      childAppenders.push(childAppender);
      return creator;
    },
    /**
     * Creates the paragraph element with specified attributes and children.
     * @returns {HTMLParagraphElement} The created paragraph element.
     */
    create: (): HTMLParagraphElement => {
      const paragraph = document.createElement(P) as HTMLParagraphElement;
      attributeSetters.forEach((applyAttributes) => {
        applyAttributes(paragraph);
      });
      childAppenders.forEach((childAppender) => {
        childAppender(paragraph);
      });
      return paragraph;
    },
  };

  return creator;
}
