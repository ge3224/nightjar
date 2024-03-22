import clsx from "clsx";

export default function PageFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "page-footer");

  const classes = clsx("w-full bg-pink-200");
  footer.setAttribute("class", classes);

  footer.textContent = "this is a page footer";

  return footer;
}
