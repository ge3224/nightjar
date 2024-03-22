import { HTMLOListElementAttributes } from "../_definitions/element_attributes";

export default function Ol(
  children: HTMLLIElement | HTMLLIElement[],
  attributes: HTMLOListElementAttributes
): HTMLOListElement {
  const ol = document.createElement("ol");

  if (Array.isArray(children)) {
    children.forEach((child) => ol.appendChild(child));
  } else {
    ol.appendChild(children);
  }

  Object.entries(attributes).map(([key, value]) => {
    if (key === "reversed" && value) {
      ol.reversed = true;
      return;
    } else if (key === "start") {
      ol.setAttribute(key, value.toString());
      return;
    }

    ol.setAttribute(key, value);
  });

  return ol;
}
