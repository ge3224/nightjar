// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewSummary from "./summary";
import { SUMMARY } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewSummary("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(SUMMARY);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("br"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = NewSummary(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewSummary("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
