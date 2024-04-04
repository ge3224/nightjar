// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewAbbr from "./abbr";
import { ABBR } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewAbbr("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(ABBR);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("div"), // not phrasing content
  ];

  const mockParent = NewAbbr(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(2);
});

test("construction with attributes", () => {
  const mock = NewAbbr("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
