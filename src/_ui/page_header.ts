import clsx from "clsx";
import NavBar from "./navbar";
import { NavLinks } from "../_definitions/nav_links";
import BrandMark from "./brand_mark";

export default function PageHeader(): HTMLDivElement {
  const div = document.createElement("div");
  div.setAttribute("id", "header-container");

  const classes = clsx("flex w-full gap-3 bg-pink-200");
  div.setAttribute("class", classes);

  const brandMark = BrandMark();
  div.appendChild(brandMark);

  const nav = NavBar([
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ] as NavLinks);
  div.appendChild(nav);

  return div;
}
