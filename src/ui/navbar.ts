import clsx from "clsx";
import { NavLinks } from "../definitions/nav_links";

export default function NavBar(menuItems: NavLinks): HTMLElement {
  const nav = document.createElement("nav");
  nav.setAttribute("id", "primary-nav");

  const classes = clsx("flex flex-col gap-2 sm:flex-row");
  nav.setAttribute("class", classes);

  menuItems.forEach((item) => {
    const a = document.createElement("a");
    a.setAttribute("href", item.link);
    a.textContent = item.label;
    nav.appendChild(a);
  });

  return nav;
}
