// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Tr from "./tr";
import { HTMLElementAttributes } from "@/_definitions/attributes";

test("basic construction", () => {
  const mock = Tr(document.createElement("td"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("TR");
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("th"),
    document.createElement("td"),
  ];

  let mockParent: HTMLTableRowElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = Tr(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = Tr(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = Tr(document.createElement("td"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
