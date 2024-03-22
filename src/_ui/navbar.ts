import clsx from "clsx";
import { NavLinks } from "../_definitions/nav_links";

export default function NavBar(menuItems: NavLinks): HTMLElement {
  const nav = document.createElement("nav");
  nav.setAttribute("id", "primary-nav");

  const classes = clsx("ml-auto mr-0 flex flex-col gap-2 sm:flex-row");
  nav.setAttribute("class", classes);

  menuItems.forEach((item) => {
    const a = document.createElement("a");
    a.setAttribute("href", item.link);
    a.textContent = item.label;

    const classes = clsx("text-black hover:text-black/75 active:text-black/50");
    a.setAttribute("class", classes);
    nav.appendChild(a);
  });

  return nav;
}
