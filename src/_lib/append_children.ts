/**
 * Append a variety of child nodes to an html element.
 */
export default function appendChildren(
  parent: HTMLElement,
  children: string | Node | (string | Node)[],
  exceptions: Array<string> = []
): void {
  if (typeof children === "string") {
    parent.appendChild(document.createTextNode(children));
  } else if (children instanceof Node) {
    if (!exceptions.includes(children.nodeName)) {
      parent.appendChild(children);
    }
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        parent.appendChild(document.createTextNode(child));
      } else {
        if (!exceptions.includes(child.nodeName)) {
          parent.appendChild(child);
        }
      }
    });
  }
}
