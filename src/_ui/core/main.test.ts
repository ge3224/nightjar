// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewMain from "./main";
import { MAIN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewMain("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(MAIN);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = NewMain(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewMain("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
