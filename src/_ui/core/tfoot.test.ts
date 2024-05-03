// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewTfoot from "./tfoot";
import { TFOOT } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTfoot(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TFOOT);
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("tr"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableSectionElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = NewTfoot(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = NewTfoot(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = NewTfoot(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
