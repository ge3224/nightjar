// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewThead from "./thead";
import { THEAD } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewThead(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(THEAD);
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("tr"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableSectionElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = NewThead(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = NewThead(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = NewThead(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
