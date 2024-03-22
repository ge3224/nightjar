export default function BrandMark(): HTMLElement {
  const div = document.createElement("div");
  div.setAttribute("id", "web-app-brand");
  div.textContent = "logo here";
  return div;
}
