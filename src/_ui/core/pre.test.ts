// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewPre from "./pre";
import { PRE } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewPre("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(PRE);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("div"), // not phrasing content
  ];

  const mockParent = NewPre(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(2);
});

test("construction with attributes", () => {
  const mock = NewPre("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
