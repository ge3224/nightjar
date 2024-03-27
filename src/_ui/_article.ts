import clsx from "clsx";

export default function Article(): HTMLElement {
  const article = document.createElement("article");
  article.setAttribute("id", "page-article");

  const classes = clsx(
    "col-span-1 w-full bg-orange-200 md:col-span-2 lg:col-span-4"
  );
  article.setAttribute("class", classes);

  article.textContent = "Article: todo....";

  return article;
}
