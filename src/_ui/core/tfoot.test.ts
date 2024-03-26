// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Tfoot from "./tfoot";

test("basic construction", () => {
  const mock = Tfoot(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("TFOOT");
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("tr"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableSectionElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = Tfoot(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = Tfoot(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = Tfoot(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
