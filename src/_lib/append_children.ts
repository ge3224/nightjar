/**
 * Append a variety of child nodes to an html element.
 */
export default function appendChildren(
  parent: HTMLElement,
  children: string | Node | (string | Node)[]
): void {
  if (typeof children === "string") {
    parent.appendChild(document.createTextNode(children));
  } else if (children instanceof Node) {
    parent.appendChild(children);
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        parent.appendChild(document.createTextNode(child));
      } else {
        parent.appendChild(child);
      }
    });
  }
}
