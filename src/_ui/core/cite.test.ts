// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewCite from "./cite";
import { CITE } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewCite("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(CITE);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("div"), // not phrasing content
  ];

  const mockParent = NewCite(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(2);
});

test("construction with attributes", () => {
  const mock = NewCite("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
