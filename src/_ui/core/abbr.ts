import { ElementAttributes, GlobalAttributes } from "@/_definitions/attributes";
import { ElementCreator } from "@/_definitions/element_creator";
import { setElementAttributes } from "@/_lib/attributes";
import { appendPhrasingContent } from "@/_lib/content";
import { ABBR } from "@/_lib/node_names";


/**
 * Creates a abbreviation element with specified attributes and children. 
 *
 * For more information about the <abbr> element, refer to the MDN documentation:
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr}
 *
 * @returns {ElementCreator<HTMLElement, GlobalAttributes>} An ElementCreator
 * object that facilitates further customization and creation of the
 * abbreviation element.
 */
export default function abbr(): ElementCreator<HTMLElement, GlobalAttributes> {
  /**
   * Array containing functions to set attributes for the paragraph element.
   * @type {Array<(element: HTMLElement) => void>}
   */
  const attributeSetters: Array<(element: HTMLElement) => void> = [];

  /**
   * Array containing functions to append children to the paragraph element.
   * @type {Array<(element: HTMLElement) => void>}
   */
  const childAppenders: Array<(element: HTMLElement) => void> = [];

  /**
   * An ElementCreator object providing methods to set attributes, append
   * children, and create the paragraph element.
   * @type {ElementCreator<HTMLElement, GlobalAttributes>}
   */
  const creator: ElementCreator<HTMLElement, GlobalAttributes> = {
    /**
     * Sets attributes for the paragraph element.
     * @param {ElementAttributes<GlobalAttributes>} attributes - The attributes to set.
     * @returns {ElementCreator<HTMLElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    attributes: (
      attributes: ElementAttributes<GlobalAttributes>
    ): ElementCreator<HTMLElement, GlobalAttributes> => {
      /**
       * Function to set attributes for the paragraph element.
       * @param {HTMLElement} element - The paragraph element to set attributes on.
       * @returns {void}
       */
      const attributeSetter = (element: HTMLElement): void => {
        setElementAttributes(element, attributes);
      };
      attributeSetters.push(attributeSetter);
      return creator;
    },
    /**
     * Sets children for the paragraph element.
     * @param {...Array<string | Node>} children - The children to append.
     * @returns {ElementCreator<HTMLElement, GlobalAttributes>} The
     * ElementCreator object for chaining.
     */
    children: (
      ...children: Array<string | Node>
    ): ElementCreator<HTMLElement, GlobalAttributes> => {
      /**
       * Function to append children to the paragraph element.
       * @param {HTMLElement} element - The paragraph element to append children to.
       * @returns {void}
       */
      const childAppender = (element: HTMLElement): void => {
        children.forEach((child) => appendPhrasingContent(element, child));
      };
      childAppenders.push(childAppender);
      return creator;
    },
    /**
     * Creates the paragraph element with specified attributes and children.
     * @returns {HTMLElement} The created paragraph element.
     */
    create: (): HTMLElement => {
      const abbr = document.createElement(ABBR) as HTMLElement;
      attributeSetters.forEach((applyAttributes) => {
        applyAttributes(abbr);
      });
      childAppenders.forEach((childAppender) => {
        childAppender(abbr);
      });
      return abbr;
    },
  };

  return creator;
}

// /**
//  * A constructor for the HTML <abbr> element.
//  *
//  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
//  */
// export default function NewAbbr(
//   children: string | Node | Array<string | Node>,
//   attributes: GlobalAttributes
// ): HTMLElement {
//   const abbr = document.createElement("abbr");
//
//   Object.entries(attributes).forEach(([key, value]) => {
//     switch (key) {
//       case "autofocus":
//         abbr.autofocus = value;
//         return;
//       case "inert":
//         abbr.inert = value;
//         return;
//       default:
//         abbr.setAttribute(
//           key.toLowerCase(),
//           typeof value === "number" ? value.toString() : value
//         );
//     }
//   });
//
//   const append = (child: string | Node) => {
//     if (typeof child === "string") {
//       abbr.appendChild(document.createTextNode(child));
//     } else if (child instanceof Node && isPhrasingContent(child)) {
//       abbr.appendChild(child);
//     }
//   };
//
//   Array.isArray(children)
//     ? children.forEach((child) => append(child))
//     : append(children);
//
//   return abbr;
// }
