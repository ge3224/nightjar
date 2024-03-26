
// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Tbody from "./tbody";
import { HTMLElementAttributes } from "@/_definitions/attributes";

test("basic construction", () => {
  const mock = Tbody(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("TBODY");
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("tr"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableSectionElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = Tbody(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = Tbody(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = Tbody(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
