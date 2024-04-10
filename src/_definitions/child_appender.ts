/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Represents a function that appends children of type C to an HTML element of type T.
 * @template T The type of the HTML element to which children will be appended.
 * @template C The type of children to be appended to the HTML element.
 * @param {T} element The HTML element to which children will be appended.
 * @returns {(children: Array<C>) => void} A function that takes an array of
 * children and appends them to the HTML element.
 */
export type ChildAppender<T extends HTMLElement, C> = (
  element: T
) => (children: Array<C>) => void;
