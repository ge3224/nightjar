import clsx from "clsx";

export default function Aside(): HTMLElement {
  const aside = document.createElement("aside");
  aside.setAttribute("id", "page-aside");

  const classes = clsx("w-full bg-lime-200");
  aside.setAttribute("class", classes);

  aside.textContent = "Aside: todo...";

  return aside;
}
