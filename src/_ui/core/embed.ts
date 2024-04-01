/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLEmbedElementAttributes } from "@/_definitions/attributes/embed";
import { NewHTMLEmbedElement } from "@/_definitions/constructors";

/**
 * Returns a constructor for the HTML <embed> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
 */
export default function NewEmbed(
  attributes: HTMLEmbedElementAttributes = {}
): NewHTMLEmbedElement {
  return (): HTMLEmbedElement => {
    const embed = document.createElement("embed");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          embed.autofocus = value;
          return;
        case "inert":
          embed.inert = value;
          return;
        default:
          embed.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    return embed;
  };
}
