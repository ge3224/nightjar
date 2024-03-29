// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isHeadingContent } from "./categories";

test("isHeadingContent helper function", () => {
  const validHeadings = [
    document.createElement("h1"),
    document.createElement("h2"),
    document.createElement("h3"),
    document.createElement("h4"),
    document.createElement("h5"),
    document.createElement("h6"),
    document.createElement("hgroup"),
  ];

  validHeadings.forEach(heading => {
    expect(isHeadingContent(heading)).toBe(true);
  });

  const invalidHeadings = [
    document.createElement("p"),
    document.createElement("title"),
    document.createElement("strong"),
    document.createElement("em"),
    document.createElement("header"),
  ];

  invalidHeadings.forEach(invalid => {
    expect(isHeadingContent(invalid)).toBe(false);
  });
});
