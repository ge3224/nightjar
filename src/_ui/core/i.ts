/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ElementAttributes, GlobalAttributes } from "@/_definitions/attributes";
import { ElementCreator } from "@/_definitions/element_creator";
import { setElementAttributes } from "@/_lib/attributes";
import { appendPhrasingContent } from "@/_lib/content";
import { I } from "@/_lib/node_names";

/**
 * Creates an idiomatic text element with specified attributes and children.
 *
 * For more information about the <p> element, refer to the MDN documentation:
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i}
 *
 * @returns {ElementCreator<HTMLElement, GlobalAttributes>} An ElementCreator
 * object that facilitates further customization and creation of the idiomatic
 * text element.
 */
export default function i(): ElementCreator<
  HTMLElement,
  GlobalAttributes
> {
  /**
   * Array containing functions to set attributes for the idiomatic text element.
   * @type {Array<(element: HTMLElement) => void>}
   */
  const attributeSetters: Array<(element: HTMLElement) => void> = [];

  /**
   * Array containing functions to append children to the idiomatic text element.
   * @type {Array<(element: HTMLElement) => void>}
   */
  const childAppenders: Array<(element: HTMLElement) => void> = [];

  /**
   * An ElementCreator object providing methods to set attributes, append
   * children, and create the idiomatic text element.
   * @type {ElementCreator<HTMLElement, GlobalAttributes>}
   */
  const creator: ElementCreator<HTMLElement, GlobalAttributes> = {
    /**
     * Sets attributes for the idiomatic text element.
     * @param {ElementAttributes<GlobalAttributes>} attributes - The attributes to set.
     * @returns {ElementCreator<HTMLElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    attributes: (
      attributes: ElementAttributes<GlobalAttributes>
    ): ElementCreator<HTMLElement, GlobalAttributes> => {
      /**
       * Function to set attributes for the idiomatic text element.
       * @param {HTMLElement} element - The idiomatic text element to set attributes on.
       * @returns {void}
       */
      const attributeSetter = (element: HTMLElement): void => {
        setElementAttributes(element, attributes);
      };
      attributeSetters.push(attributeSetter);
      return creator;
    },
    /**
     * Sets children for the idiomatic text element.
     * @param {...Array<string | Node>} children - The children to append.
     * @returns {ElementCreator<HTMLElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    children: (
      ...children: Array<string | Node>
    ): ElementCreator<HTMLElement, GlobalAttributes> => {
      /**
       * Function to append children to the idiomatic text element.
       * @param {HTMLElement} element - The idiomatic text element to append children to.
       * @returns {void}
       */
      const childAppender = (element: HTMLElement): void => {
        children.forEach((child) => appendPhrasingContent(element, child));
      };
      childAppenders.push(childAppender);
      return creator;
    },
    /**
     * Creates the idiomatic text element with specified attributes and children.
     * @returns {HTMLElement} The created idiomatic text element.
     */
    create: (): HTMLElement => {
      const idiomaticText = document.createElement(I) as HTMLElement;
      attributeSetters.forEach((applyAttributes) => {
        applyAttributes(idiomaticText);
      });
      childAppenders.forEach((childAppender) => {
        childAppender(idiomaticText);
      });
      return idiomaticText;
    },
  };

  return creator;
}
