import clsx from "clsx";
import PageHeader from "./page_header";
import PageFooter from "./page_footer";
import PageMain from "./page_main";

export default function Page(): HTMLDivElement {
  const container = document.createElement("div");
  container.setAttribute("id", "main-container");

  const classes = clsx("flex min-h-screen flex-col justify-between");
  container.setAttribute("class", classes);

  const pageHeader = PageHeader();
  container.appendChild(pageHeader);

  const pageMain = PageMain();
  container.appendChild(pageMain);

  const pageFooter = PageFooter();
  container.appendChild(pageFooter);

  return container;
}
