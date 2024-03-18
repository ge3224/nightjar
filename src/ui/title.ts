import clsx from "clsx";

export default function Title(text: string): HTMLElement {
  const classes = clsx("text-4xl font-semibold text-red-500");

  const heading = document.createElement("h1");

  heading.setAttribute("class", classes);
  heading.textContent = text;

  return heading;
}
