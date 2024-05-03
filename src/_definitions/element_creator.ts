/**
 * Project: Nightjar
 * Module: element_creators
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { ElementAttributes, GlobalAttributes } from "./attributes";

/**
 * Defines a type representing an element creator, providing methods to set
 * attributes, children, and create the element.
 * @template T - The type of the HTMLElement being created.
 * @template A - The type of global attributes applicable to the HTMLElement being created.
 */
export type ElementCreator<
  T extends HTMLElement,
  A extends GlobalAttributes,
> = {
  /**
   * Method to set attributes for the element being created.
   * @param {ElementAttributes<A>} attributes - The attributes to set for the element.
   * @returns {ElementCreator<T, A>} The updated ElementCreator object for chaining.
   */
  attributes: (attributes: ElementAttributes<A>) => ElementCreator<T, A>;

  /**
   * Method to set children for the element being created.
   * @param {...Array<string | Node>} children - The children elements to append.
   * @returns {ElementCreator<T, A>} The updated ElementCreator object for chaining.
   */
  children: (...children: Array<string | Node>) => ElementCreator<T, A>;

  /**
   * Method to create the HTMLElement with specified attributes and children.
   * @returns {T} The created HTMLElement.
   */
  create: () => T;
};
