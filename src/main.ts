import clsx from "clsx";
import "./style.css";
import PageHeader from "./_ui/page_header";
import PageMain from "./_ui/page_main";
import PageFooter from "./_ui/page_footer";

function Page(): HTMLDivElement {
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

document.querySelector<HTMLDivElement>("#app")!.appendChild(Page());
