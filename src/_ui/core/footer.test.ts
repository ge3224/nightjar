// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewFooter from "./footer";
import { FOOTER } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewFooter("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(FOOTER);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
    document.createElement("header"), // prohibited flow content
    document.createElement("footer"), // prohibited flow content
  ];

  const mockParent = NewFooter(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewFooter("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
