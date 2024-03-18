import clsx from "clsx";
import NavBar from "./navbar";
import { NavLinks } from "../definitions/nav_links";

export default function PageHeader(): HTMLDivElement {
  const div = document.createElement("div");
  div.setAttribute("id", "header-container");

  const classes = clsx("w-full bg-pink-200");
  div.setAttribute("class", classes);

  const nav = NavBar([
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ] as NavLinks);
  div.appendChild(nav);

  return div;
}
