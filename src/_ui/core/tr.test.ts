// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewTr from "./tr";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import { TR } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTr(document.createElement("td"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TR);
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("th"),
    document.createElement("td"),
  ];

  let mockParent: HTMLTableRowElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = NewTr(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = NewTr(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();
});

test("construction with attributes", () => {
  const mock = NewTr(document.createElement("td"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
