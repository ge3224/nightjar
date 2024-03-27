// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Blockquote from "./blockquote";
import { HTMLQuoteElementAttributes } from "@/_definitions/attributes/blockquote";

test("basic construction", () => {
  const mock = Blockquote("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("BLOCKQUOTE");
  expect(mock.textContent).toBe("foo")
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("a"),
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("style"), // not flow content
  ];

  let mockParent = Blockquote(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Blockquote("foo", {
    id: "bar",
    class: "foo bar baz",
    cite: "https://www.foo.com/bar"
  } as HTMLQuoteElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.getAttribute("cite")).toBe("https://www.foo.com/bar");
});
