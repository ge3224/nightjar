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
      default:
        img.setAttribute(key, value);
    }
  });

  return img;
}
