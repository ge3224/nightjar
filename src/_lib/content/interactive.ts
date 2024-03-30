/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

/**
 * Indicates if the given node is a member of the interactive content category.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content)
 */
export function isInteractiveContent(node: Node): boolean {
  const nodeNames = [
    "BUTTON",
    "DETAILS",
    "EMBED",
    "IFRAME",
    "LABEL",
    "SELECT",
    "TEXTAREA",
  ];

  if (nodeNames.includes(node.nodeName)) return true;

  switch (node.nodeName) {
    case "A":
      return (node as HTMLAnchorElement).getAttribute("href") === null
        ? false
        : true;
    case "AUDIO":
      return (node as HTMLAudioElement).getAttribute("controls") === null
        ? false
        : true;
    case "IMG":
      return (node as HTMLImageElement).getAttribute("usemap") === null
        ? false
        : true;
    case "INPUT":
      return (node as HTMLInputElement).getAttribute("type") === null
        ? false
        : true;
    case "OBJECT":
      return (node as HTMLObjectElement).getAttribute("usemap") === null
        ? false
        : true;
    case "VIDEO":
      return (node as HTMLVideoElement).getAttribute("controls") === null
        ? false
        : true;
    default:
      return false;
  }
}
