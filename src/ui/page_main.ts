import clsx from "clsx";

export default function PageMain(): HTMLElement {
  const main = document.createElement("main");
  main.setAttribute("id", "page-main");

  const classes = clsx("flex min-h-screen w-full flex-col bg-orange-200");
  main.setAttribute("class", classes);

  main.textContent = "this is the page main section";

  return main;
}
