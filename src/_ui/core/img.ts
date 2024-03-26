import { HTMLImageElementAttributes } from "@/_definitions/attributes";

export default function Img(
  attributes: HTMLImageElementAttributes
): HTMLImageElement {
  const img = document.createElement("img");

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "height":
        img.setAttribute(key, value.toString());
        return;
      case "width":
        img.setAttribute(key, value.toString());
        return;
      case "ismap":
        img.isMap = true;
        return;
      case "autofocus":
        img.autofocus = value;
        return;
      case "inert":
        img.inert = value;
        return;
      default:
        img.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return img;
}
