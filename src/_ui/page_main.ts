import clsx from "clsx";
import Article from "./_article";
import Aside from "./_aside";

export default function PageMain(): HTMLElement {
  const main = document.createElement("main");
  main.setAttribute("id", "page-main");

  const classes = clsx(
    "min-h-screen w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  );
  main.setAttribute("class", classes);

  const aside = Aside();
  main.appendChild(aside);

  const article = Article();
  main.appendChild(article);

  // main.textContent = "this is the page main section";

  return main;
}
