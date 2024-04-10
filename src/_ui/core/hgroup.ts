/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from "@/_definitions/attributes";
import { NewHTMLElement } from "@/_definitions/constructors";
import { H1, H2, H3, H4, H5, H6, P } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <hgroup> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
 */

export default function NewHgroup(
  children: Node | Array<Node> | null = null,
  attributes: GlobalAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const hgroup = document.createElement("hgroup");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          hgroup.autofocus = value;
          return;
        case "inert":
          hgroup.inert = value;
          return;
        default:
          hgroup.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return hgroup;

    // TODO: Zero or more <p> elements, followed by one h1, h2, h3, h4, h5, or h6 element, followed by zero or more <p> elements.
    const permittedContent = [P, H1, H2, H3, H4, H5, H6];

    if (!Array.isArray(children)) {
      if (
        children instanceof Node &&
        permittedContent.indexOf(children.nodeName) > 0
      ) {
        hgroup.append(children);
      }
      return hgroup;
    }

    const { permitted, hasHeading } = children.reduce(
      (
        collect: { permitted: Array<Node>; hasHeading: boolean },
        child: Node
      ) => {
        const { permitted, hasHeading } = collect;

        if (permittedContent.indexOf(child.nodeName) > 0 && !hasHeading) {
          permitted.push(child);
          return { permitted, hasHeading: true };
        }

        if (permittedContent.indexOf(child.nodeName) === 0) {
          permitted.push(child);
          return { ...collect, permitted };
        }

        return collect;
      },
      { permitted: [], hasHeading: false }
    );

    if (hasHeading) {
      permitted.forEach((child) => hgroup.append(child));
    }

    return hgroup;
  };
}
