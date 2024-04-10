// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewTbody from "./tbody";
import { GlobalAttributes } from "@/_definitions/attributes";
import { TBODY } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTbody(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TBODY);
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("tr"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableSectionElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = NewTbody(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = NewTbody(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = NewTbody(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
