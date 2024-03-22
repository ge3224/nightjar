// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Ol from "./ol";
import { HTMLOListElementAttributes, NumberingTypeAttribute } from "../_definitions/element_attributes";

test("basic construction", () => {
  const mock = Ol(document.createElement("li"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("OL");
});

test("construction with multiple child nodes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mockParent = Ol(mockChildren, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("LI");
  expect(mockParent.firstElementChild?.textContent).toEqual("foo");
});

test("construction with attributes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mock = Ol(mockChildren, {
    id: "bar",
    class: "foo bar baz",
    reversed: true,
    start: 4,
    type: NumberingTypeAttribute.lowercaseLetters,
  } as HTMLOListElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.reversed).toBe(true);
  expect(mock.getAttribute("start")).toBe("4");
  expect(mock.getAttribute("type")).toBe("a");
});
