// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Ul from "./ul";
import { HTMLElementAttributes } from "../../_definitions/attributes";

test("basic construction", () => {
  const mock = Ul(document.createElement("li"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("UL");
});

test("construction with multiple child nodes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mockParent = Ul(mockChildren, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("LI");
  expect(mockParent.firstElementChild?.textContent).toEqual("foo");
});

test("construction with attributes", () => {
  const mock = Ul(document.createElement("li"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
